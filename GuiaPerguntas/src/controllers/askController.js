exports.get = (req, res) =>{
  res.render('ask');
};

exports.post = (req, res) =>{
  const { title , descripton } = req.body;
  res.status(201).send('Formulário recebido! titulo: ' + title + ' descrição: ' + descripton);
};