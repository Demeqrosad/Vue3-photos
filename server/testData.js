const Photo = require('./models/photo.model');
const Category = require('./models/category.model');

const loadTestData = async () => {

  const photosData = [
    {
      title: 'Summer session #1',
      author: 'Thanicka Milton',
      description: 'One shot from the last session! Tell me what you think!',
      src: 'photo-1529626455594-4ff0802cfb7e.jpg',
      votes: 0,
      category: 'Fashion'
    },
    {
      title: 'Summer breeze',
      author: 'Sarah Marston',
      description: 'I\' summer already!',
      src: 'photo-1515372039744-b8f02a3ae446.jpg',
      votes: 0,
      category: 'Fashion'
    },
    {
      title: 'Me and the forest',
      author: 'Jim Milton',
      description: 'It\'s one from the work',
      src: 'photo-1519058082700-08a0b56da9b4.jpg',
      votes: 0,
      category: 'Casual'
    }
  ];

  const categoriesData = [
    {
      name: 'Fashion'
    },
    {
      name: 'Casual'
    },
  ];

try {
    let counter = await Photo.countDocuments();
    if(counter === 0) {
      console.log('No photos. Loading example data...');
      await Photo.create(photosData);
      console.log('Test data has been successfully loaded');
    }
    counter = await Category.countDocuments();
    if(counter === 0) {
      console.log('No categories. Loading example data...');


      await Category.create(categoriesData);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log(`Couldn't load test data`, err);
  }

};

module.exports = loadTestData;
