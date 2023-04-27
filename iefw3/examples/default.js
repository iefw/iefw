const ie = require('iefw'); 

const uploader = new ie(); 

uploader.uploadFile('./path/to/example.txt')
  .then((fileUrl) => {
    console.log(`Arquivo enviado com sucesso! URL: ${fileUrl}`);
  })
  .catch((err) => {
    console.error(`Erro ao enviar arquivo: ${err}`);
  });
