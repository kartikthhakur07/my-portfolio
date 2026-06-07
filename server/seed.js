const mongoose = require('mongoose');
const Project = require('./models/Projects');
require('dotenv').config();

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A full-stack personal portfolio built with the MERN stack.',
    tech: 'React, Node.js, Express, MongoDB',
    githubLink: 'https://github.com/yourusername/my-portfolio',
    liveLink: '',
  },
  {
    title: 'Todo App',
    description: 'A full-stack todo app with create, update and delete functionality.',
    tech: 'React, Express, MongoDB',
    githubLink: 'https://github.com/yourusername/todo-app',
    liveLink: '',
  },
  {
    title: 'Weather App',
    description: 'Fetches live weather data using the OpenWeather API.',
    tech: 'React, OpenWeather API',
    githubLink: 'https://github.com/yourusername/weather-app',
    liveLink: '',
  },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Project.deleteMany(); // clear old data
    await Project.insertMany(projects);
    console.log('Projects seeded successfully!');
    process.exit();
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });