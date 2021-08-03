const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000; 

const dotenv = require('dotenv');
const mongoose = require('mongoose');

//import all routes:
const todosRoute = require('./routes/todos');

//config env:
dotenv.config();

//connect db:
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected successfully to database!')
);

//middlewares: 
app.use(express.json());

//route middlewares:
app.use('/api/todo', todosRoute);

app.listen(PORT, () => {
    console.log(`Server running... Currently listening on Port: ${PORT}`);
});