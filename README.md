![](https://img.shields.io/github/v/release/iefw/iefw?style=flat-square
) ![](https://img.shields.io/github/license/iefw/iefw?style=flat-square
) ![forks](https://img.shields.io/github/forks/iefw/iefw?style=flat-square
)

# IEFW3.5 - IECloud Framework

Um Framework para [IECLoud3.5](https://ie.cubiecloud.ml) que permite o upload de arquivos locais para para o site da IECloud na versão 3.0.0/3.5.0

[Changelog](https://github.com/iefw/iefw/tree/main/iefw3/changelog)

### Instalado **IEFW3.5**

Agora e possível ultilizar **3 engines** de upload no código:

**Main:** Motor padrão da IEFW3+ já definido por padrão.

**Zero:** Versão mais leve, otimizado e um pouco instável.

**Zeroplus** Versão melhorada do _zero_ com algumas melhorias nas instabilidades.

##### Instalando Via NPM (RECOMENDADO)

```
npm install --no-bin-links iefw
```

_Em nossas pesquisas, alguns dispositivos ficaram travados no download_
_Para resolver, adicione `--no-bin-links` nos argumentos npm.

##### Baixando via [MbCL Repo](https://npmjs.com/mbcl):

[_Obtenha o mbcl_](https://github.com/gslks/mbcl)

```
./mbcl get latest/iefw
```

### Enviando Arquivos via IEFW3


**Exemplo de código:**

```js
const ie = require("iefw");

const uploader = new ie();
uploader.setEngine('main');

uploader.uploadFile('./path/to/example.txt')
  .then((fileUrl) => {
    console.log(`Arquivo enviado com sucesso! URL: ${fileUrl}`);
  })
  .catch((error) => {
    console.error(`Erro ao enviar arquivo: ${error}`);
  });


```

* Você pode usar esta base para fazer a criação de código e automações com o IEFW3.5.

<hr>

[![npm](https://avatars.githubusercontent.com/u/6078720?s=25&v=4)](https://www.npmjs.com/package/iefw)  |  [<img src="https://ie.c2app.ml/u/27-04-2023/u3322ax95wo7f0e56zrp/68747470733a2f2f636c6f75642e63756269652e6d6c2f63756269652f63756269652e706e67.png" width=25 heigh=25>](https://mbcl.ml/latest/iefw/main.zip)
