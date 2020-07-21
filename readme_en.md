# Ecoleta

<p align="center">
    <img src="https://github.com/felipedmsantos95/ecoleta/blob/master/img/Ecoleta.jpg"/>
    </br>
    <a href="readme_en.md">English</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="readme.md">Português</a>&nbsp;&nbsp;&nbsp;
</p>

## Application Web Preview

<p align="center">
  <img src="https://github.com/felipedmsantos95/ecoleta/blob/master/img/ecoleta.gif"/>
</p>

## App Mobile Screenshots

<p align="center">
  <img src="https://github.com/felipedmsantos95/ecoleta/blob/master/img/tela1.png"/>
</p>

## About

Aplicação desenvolvida na Next Level Week 1.0, da Rocketseat: Plataforma com paǵina web para cadastro de pontos de coleta de resíduos com integração com API do IBGE e interação com mapas e aplicativo mobile em para usuários buscarem pontos de descarte para seus resíduos.

## Used technologies

- React.js para front-end
- React-Native para app mobile
- Node.js para back-end
- Banco de dados SQLite


## Requirements

Para executar os módulos do projeto é necessário ter os seguintes requisitos instalados no sistema:

- Node 12.x ou superior
- Yarn 1.21 ou superior
- Expo-cli 3.15 ou superior

## Executando o projeto

### Clonando o projeto

```bash
$ git clone https://github.com/felipedmsantos95/ecoleta
$ cd ecoleta
```

### Running Backend

1. Para rodar a API pela primeira vez, acessar o diretório ./server/ e executar o comando abaixo para instalar as dependências:

		npm i

2. Uma vez instaladas as dependências, pelo comando abaixo é possível executar o backend da aplicação, por padrão ele estará disponível para requisições através da porta 3333 no endereço http://localhost:3333/:

		npm start

### Running Frontend Web

Com o backend sendo executado, pode-se executar os passos abaixo para rodar o frontend da aplicação localmente.

1. Acessar o diretório ./web/ e executar o comando abaixo para instalar as dependências:

		yarn

2. Uma vez instaladas as dependências, pelo comando abaixo é possível executar o frontend da aplicação:

		yarn start

3. Feito isso, através de um navegador de internet (preferencialmente o Chrome ou o Firefox), através do endereço abaixo, será possível interagir com a aplicação desenvolvida.

		http://localhost:3000/

### Running App Mobile

1. Instalar o aplicativo [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) em seu smartphone e o conectar na mesma rede que o servidor back-end.

2. Acessar o diretório ./mobile/ e executar o comando abaixo para instalar as dependências:

		yarn

3. Uma vez instaladas as dependências, pelo comando abaixo é possível executar o cliente expo em seu navegador web padrão:

		yarn start

4. Em seu smartphone abra o app expo e no modo LAN, faça o scan do QRCode fornecido em seu navegador web.