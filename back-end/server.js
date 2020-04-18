const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/recipes', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for items in the recipe: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  type: String,
  name: String,
  description: String,
  servings: String,
  time: String,
  ingredients: Array,
  directions: Array,
  imagePath: String
});

// Create a model for items in the cookbook.
const Item = mongoose.model('Item', itemSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }

  res.send({
    path: "/images/" + req.file.filename
  });
});

// Create a new item in the cookbook: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
  const item = new Item({
    type: req.body.type,
    name: req.body.name,
    description: req.body.description,
    servings: req.body.servings,
    time: req.body.time,
    ingredients: req.body.ingredients,
    directions: req.body.directions,
    imagePath: req.body.imagePath
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the cookbook.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/items/:id", async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id
    }).populate('user');
    res.send(item);
  } catch(error) {
    console.log(error);
    req.sendStatus(500);
  }
})

app.delete('/api/items/:id', async(req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})
//do i need to change this more
app.put('/api/items/:id', async(req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id
    });
    item.type = req.body.type,
    item.name = req.body.name,
    item.description = req.body.description,
    item.servings = req.body.servings,
    item.time = req.body.time,
    item.ingredients = req.body.ingredients,
    item.directions = req.body.directions,
    item.imagePath = req.body.imagePath
    await item.save();
    res.sendStatus(200);
  } catch(error) {
    console.log(error);
    req.sendStatus(500);
  }
})

app.listen(3002, () => console.log('Server listening on port 3002!'));
