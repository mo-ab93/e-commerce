const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config()
const {ENVIROMENT, PORT} = process.env;



const testRoutes = require('./routes/testRoutes');


const app = express();


//middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());

app.use('/names', testRoutes);



app.get('/', (req, res) => {
  res.json({greetings: "Hello World"})
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))