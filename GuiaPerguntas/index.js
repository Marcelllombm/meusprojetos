const express = require('express');
const app = express();

const { guia_pesquisa, guia_resposta } = require('./models');


// Estou dizendo para o Express usar o EJS como vien engine
app.set('view engine', 'ejs');

// usando arquivo static
app.use(express.static('public'));

// para pegar o conteudo do formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// rotas
app.get('/', (req, res) => {
  // raw tras a pesquisa crua
  guia_pesquisa.findAll({raw:true, order:[
    ['id','DESC']
  ]}).then(pergunta =>{
    res.render("index",{
      pergunta: pergunta
    });
  });
});

app.get('/perguntar', (req, res) => {
    res.render("ask");
});

app.post('/perguntasalvo', async (req, res) => {

  const { title, description } = req.body;

  try {
    await guia_pesquisa.create({
      title,
      description,
    });
    return res.redirect('/');
  } catch (err) {
    console.log(err, "erro no controller")
  }
});

app.get('/pergunta/:id', async (req, res)=>{
  let {id: askId} = req.params;
    await guia_pesquisa.findOne({
    where:{id: askId}
  }).then(pergunta => {
    if(pergunta != undefined){
      
    guia_resposta.findAll({
      where:{pergunta_id: askId},
      order:[
        ['id','DESC']
      ]
     }).then(respostas =>{
       res.render("seeQuestion",{
           pergunta: pergunta,
           respostas: respostas
         });
         console.log(respostas, 'no terminal llllllll');
     });
    }else{
      res.redirect("/");
    }
  });
});


app.post('/responder', (req, res)=>{
  const {corpo , perguntaId} = req.body;
    guia_resposta.create({
      corpo,
      perguntaId,
    }).then(()=>{
      res.redirect('/pergunta/'+ perguntaId);
    });
 
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log('Servidor OK');
});