const mongoose = require('mongoose');
const Category = mongoose.model('Category');

/****** ADD CATEGORY ********/

exports.add = async (req, res) => {

  try {
    const { name } = req.body;

    if(name) { // if fields are not empty...

      const newCat = new Photo({ name });
      await newCat.save(); // ...save new photo in DB
      res.json(newCat);

    } else {
      throw new Error('Wrong input!');
    }

  } catch(err) {
    res.status(500).json(err);
  }

};

/****** LOAD ALL CATEGORIES ********/

exports.loadAll = async (req, res) => {

  try {
    res.json(await Category.find());
  } catch(err) {
    res.status(500).json(err);
  }

};
