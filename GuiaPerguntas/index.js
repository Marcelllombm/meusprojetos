const express = require('express');
const app = express();

// Estou dizendo para o Express usar o EJS como vien engine
app.set('view engine','ejs');

// usando arquivo static
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const askRoute = require('./src/routes/askRoute');


app.use(askRoute);

app.get('/', (req, res)=>{
  res.render("index");
});

const PORT = 3000;
app.listen(PORT, ()=>{
  console.log('Servidor OK');
});