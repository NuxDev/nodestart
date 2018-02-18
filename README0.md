# Brainux Basic Node Projects w/ Babel and Mocha

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](#)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](#)

Este é um simples node projeto inicial com suporte a [Babel JS](https://babeljs.io/), Mocha e nodemon. Este conjunto permite que seu código seja moderno, tenha suporte a teste e o servidor seja reiniciado de forma automática sempre que mudanças ocorrerem enquanto desenvolve.

## Machine Setup

Este app tem alguns pre-requisitos no seu sistema. Se já tiver usado uma vez este modelo com sucesso, então seu sistema está configurado e você pode pular esta parte.

* Install NodeJS >= 4.x
    * You can [download it here](https://nodejs.org/en/).
* Install NPM 3.x
    * Even though you may have the latest NodeJS, that doesn't mean you have the latest version of NPM. You can check your version with `npm -v`. If you need to update, run `npm install npm -g`.
* Install a Git Client
    * Here's [a nice GUI client](https://desktop.github.com).
    * Here's [a standard client](https://git-scm.com).

Uma vez que seus pré-requisitos estão ok, instale o seguinte:

```
npm install --save-dev babel-cli babel-preset-env babel-preset-stage-2 babel-register nodemon mocha
```

> Note: Sempre execute seus comandos de uma Bash prompt. Se dor preciso usar `sudo` para rodar sua aplicação, há algo errado e você não deve executar, pois desastres podem acontecer. Chame alguém para lhe ajudar a configurar seu ambiente.

## Application Setup
Se receber mensagem que falta algum modulo, execute o seguinte de dentre do diretório da sua aplicação:

```
npm install
```

## Executando a sua aplicação. Running The App

Para executar sua aplicação e acessá-la do navegar, digite o seguinte no terminal do diretório de sua aplicação:

```
npm run build
npm run server
```

Veja [scripts](#) em package.json para mais comandos e `npm test` para executar seus testes.

[[Babel](https://babeljs.io/)]
(https://babeljs.io/)

[Sails]
(http://sailsjs.org/)

(http://babeljs.io/env)

(https://babeljs.io/docs/plugins/)

(https://github.com/mochajs/mocha/wiki/compilers-deprecation)

[[Nodemon](https://github.com/remy/nodemon#nodemon)] Configuração do Nodemon.
