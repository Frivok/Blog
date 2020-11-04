const express = require('express');
const { dirname } = require('path');
const morgan = require('morgan')

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware & static files 
app.use(express.static('public'))
app.use(morgan('dev'));

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'lorem'},
    {title: 'Mario finds stars', snippet: 'lorem'},
    {title: 'How to defeat bowser', snippet: 'lorem'},
  ];
  res.render('index', { title: 'Home', blogs: blogs});
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req,res) => {
  res.render('create', { title: 'Create a new Blog'});
})


// 404 page has to be at the bottom
app.use((req,res) => {
  res.status(404).render('404', { title: '404'})
})