![](https://img.shields.io/github/v/release/iefw/iefw?style=flat-square
) ![](https://img.shields.io/github/license/iefw/iefw?style=flat-square
) ![forks](https://img.shields.io/github/forks/iefw/iefw?style=flat-square
)

# IEFW 1.x.x Finalizado

### Como ir para IEFW2 ?

Atualize o pacote 
```
npm install iefw@2.0.0
```

* Aproveite o **IEFW2**

<hr>

# IEFW2 - IECloud Framework

Um Framework de upload de arquivos locais para a o site de upload [IECloud](https://ie-cloud.cubie.com.br)

### Instalado **IEFW2**

##### NPM

```
npm install --no-bin-links iefw
```

##### [MbCL Repo](https://repo.mbcl.ml):

```
./mbcl --dl latest/iefw
```

### Enviando Arquivos


**Exemplo de código:** [(disponível aqui)](https://github.com/iefw/iefw/iefw2/examples/default.js)

```js
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
```

<hr>

[![npm](https://avatars.githubusercontent.com/u/6078720?s=25&v=4)](https://www.npmjs.com/package/iefw)
