const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/home', (req, res) => {
  res.render('pages/home');
});

app.get('/oni', (req, res) => {
  res.render('pages/oni');
});

app.get('/hannya', (req, res) => {
  res.render('pages/hannya');
});

app.get('/menpo', (req, res) => {
  res.render('pages/menpo');
});

app.get('/tengu', (req, res) => {
  res.render('pages/tengu');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
