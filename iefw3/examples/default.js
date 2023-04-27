const Upload = require(iefw); 

const upload = new Upload(); 

async function main() {
  try {
    const fileUrl = await upload.uploadFile('./path/to/example.txt'); 

    console.log(`Arquivo enviado com sucesso! URL: ${fileUrl}`); 
  } catch (error) {
    console.error(`Erro ao enviar arquivo: ${error.message}`); 
  }
}

main();
