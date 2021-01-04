const mongoose = require('mongoose');
const Photo = mongoose.model('Photo');

/****** SUBMIT PHOTO ********/

exports.add = async (req, res) => {

  try {
    const { title, author, description, category } = req.fields;
    const file = req.files.file;

    if(title && author && description && category && file) { // if fields are not empty...

      const fileName = file.path.split('/').slice(-1)[0]; // cut only filename from full path, e.g. C:/test/abc.jpg -> abc.jpg
      const newPhoto = new Photo({ title, author, description, category, src: fileName, votes: 0 });
      await newPhoto.save(); // ...save new photo in DB
      res.json(newPhoto);

    } else {
      throw new Error('Wrong input!');
    }

  } catch(err) {
    res.status(500).json(err);
  }

};

/****** LOAD BY ID  ********/

exports.loadById = async (req, res) => {
  try {
    console.log('test')
    const { id } = req.params;
    const photo = await Photo.findOne({ _id: id })
    if(!photo) res.status(404).json({ message: 'No photo' });
    res.json(photo);
  } catch(err) {
    res.status(500).json(err);
  }

};

/****** LOAD ALL PHOTOS ********/

exports.loadAll = async (req, res) => {
  try {
    const { page } = req.params;
    res.json(await Photo.find().skip((page - 1) * 12).limit(12));
  } catch(err) {
    res.status(500).json(err);
  }

};

/****** LOAD PHOTOS BY CATEGORY ********/

exports.loadByCategory = async (req, res) => {

  try {
    const { category, page } = req.params;
    if(!category || !page) throw new Error('Wrong input!');
    res.json(await Photo.find({ category }).skip((page - 1) * 12).limit(12));
  } catch(err) {
    res.status(500).json(err);
  }

};

/****** VOTE FOR PHOTO ********/

exports.vote = async (req, res) => {

  try {
    const photoToUpdate = await Photo.findOne({ _id: req.params.id });
    if(!photoToUpdate) res.status(404).json({ message: 'Not found' });
    else {
      photoToUpdate.votes++;
      photoToUpdate.save();
      res.send({ message: 'OK' });
    }
  } catch(err) {
    res.status(500).json(err);
  }

};
