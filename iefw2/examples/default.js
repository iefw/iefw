const ie = require('iefw');
const fileUploader = new ie();

const filePath = './path/to/example.txt';

fileUploader.uploadFile(filePath)
  .then((fileUrl) => {
    console.log(`Arquivo enviado com sucesso. URL do arquivo: ${fileUrl}`);
  })
  .catch((err) => {
    console.error('Erro ao enviar o arquivo:', err);
  });
