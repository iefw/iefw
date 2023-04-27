![](https://img.shields.io/github/v/release/iefw/iefw?style=flat-square
) ![](https://img.shields.io/github/license/iefw/iefw?style=flat-square
) ![forks](https://img.shields.io/github/forks/iefw/iefw?style=flat-square
)

# IEFW3 - IECloud Framework

Um Framework de upload de arquivos locais para a o site de upload [IECloud](https://ie-cloud.cubie.com.br) na versão 3.

[Changelog](https://github.com/iefw/iefw/iefw3/changelog/README.md)

### Instalado **IEFW3**

A partir do [IEFW3](https://npmjs.org/iefw)/IECloud3 os sistemas mudam completamente com foco em performance.

##### Via NPM

```
npm install iefw
```

##### [MbCL Repo](https://npmjs.com/mbcl):

```
./mbcl --dl latest/iefw
```

### Enviando Arquivos via IEFW3


**Exemplo de código:** [(disponível aqui)](https://github.com/iefw/iefw/iefw3/examples/default.js)

```js
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

```

* Você pode usar essa base para criação de código com o IEFW3.

<hr>

[![npm](https://avatars.githubusercontent.com/u/6078720?s=25&v=4)](https://www.npmjs.com/package/iefw)  |  [<img src="https://ie.c2app.ml/u/27-04-2023/u3322ax95wo7f0e56zrp/68747470733a2f2f636c6f75642e63756269652e6d6c2f63756269652f63756269652e706e67.png" width=25 heigh=25>](https://mbcl.ml/latest/iefw/main.zip)
