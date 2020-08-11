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
  <img src="https://github.com/felipedmsantos95/ecoleta/blob/master/img/inicial.png"/>
  <img src="https://github.com/felipedmsantos95/ecoleta/blob/master/img/mapa.png"/>
  <img src="https://github.com/felipedmsantos95/ecoleta/blob/master/img/detail.png"/>
</p>

## About

Application developed at Rocketseat's Next Level Week 1.0: Platform with web page for registering waste collection points with integration with IBGE API and interaction with maps and mobile application for users to seek disposal points for their waste.

## Used technologies

- React.js for front-end
- React-Native for app mobile
- Node.js for back-end
- SQLite database


## Requirements

To execute the project modules it is necessary to have the following requirements installed in the system:

- Node 12.x or later
- Yarn 1.21 or later
- Expo-cli 3.15 or later

## Running the project

### Clonning the project

```bash
$ git clone https://github.com/felipedmsantos95/ecoleta
$ cd ecoleta
```

### Running Backend

1. To run the API for the first time, access the ./server/ directory and execute the command below to install the dependencies:

		npm i

2. Once the dependencies are installed, using the command below it is possible to execute the application backend, by default it will be available for requests through port 3333 at the address http://localhost:3333/

		npm start

### Running Frontend Web

With the backend running, you can perform the steps below to run the application frontend locally.

1. Access the ./web/ directory and run the command below to install the dependencies:

		yarn

2. Once the dependencies are installed, using the command below it is possible to run the application frontend:

		yarn start

3. That done, through an internet browser (preferably Chrome or Firefox), through the address below, it will be possible to interact with the developed application.

		http://localhost:3000/

### Running App Mobile

1. Install the [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) application on your smartphone and connect it on the same network as the back-end server. PS: the URL of the backend server can be changed in the `baseURL` variable in `./mobile/src/services/api.ts`.

2. Access the ./mobile/ directory and execute the command below to install the dependencies:

		yarn

3. Once the dependencies are installed, using the command below it is possible to run the expo client in your standard web browser:

		yarn start

4. On your smartphone, open the expo app and in LAN mode, scan the QRCode provided in your web browser.
