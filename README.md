![](https://img.shields.io/github/v/release/iefw/iefw?style=flat-square
) ![](https://img.shields.io/github/license/iefw/iefw?style=flat-square
) ![forks](https://img.shields.io/github/forks/iefw/iefw?style=flat-square
)

# DESCONTINUADO (LEIA)

* **MbCL Repo** não receberá mais atualizações do **IEFW**, baixe via **NPM** para continuar recebendo correções e atualizacoes.

_IEFW Apenas receberá pequenas atualizacoes de **patchs** e correções de pequenos bugs_

<hr>

# IEFW3.5.5 - IECloud Framework (Patch Update)

Agumas pequenas correções foram feitas, veja nossa *changelog* para mais informações.

[Changelog](https://github.com/iefw/iefw/tree/main/iefw3/changelog)

### Instalado **IEFW3.5.5**

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

##### Baixando via [MbCL Repo](https://npmjs.com/mbcl): **(DESCONTINUADO)**

[_Obtenha o mbcl_](https://github.com/gslks/mbcl)

```
./mbcl get latest/iefw
```

**MBCL Recebeu atualizacoes do IEFW até 3.5.1 !**

### Enviando Arquivos via IEFW3.5.5


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

<hr>
