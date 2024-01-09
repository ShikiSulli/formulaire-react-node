const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const formulaire = require('./Routes/Formulaire');
require('dotenv').config();
const mongoose = require('mongoose');
const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
app.use(cors({ origin: '*' }));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://' + username + ':' + password + '@cluster0.oaipshp.mongodb.net/prepavenir?retryWrites=true&w=majority');
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(formulaire);
app.listen(3001
    , () => console.log('Serveur lancé sur le port 3001'));