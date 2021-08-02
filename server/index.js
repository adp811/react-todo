const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000; 

const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected successfully to database!')
);

app.listen(PORT, () => {
    console.log(`Server running... Currently listening on Port: ${PORT}`);
});