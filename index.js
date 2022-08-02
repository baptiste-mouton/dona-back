require('dotenv').config();

const routes = require('./routes/routes');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoURL = process.env.DB_URL;
const PORT = 8080;

console.log('MONGO URL = ', mongoURL);

mongoose.connect(mongoURL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database connected!');
});

//APP LAUNCHING
const app = express();
app.use(cors());
app.use(express.json());

app.listen(
    PORT,
    () => console.log(`server running on http://localhost:${PORT}`)
);

app.use('/api', routes);