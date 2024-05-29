const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const formRouter = require('./Router/router.form'); // 
const port = 3001;

app.use(express.json()); 
app.use(cors()); 

const connection = mongoose.connect(`mongodb://localhost:27017/Forms`)

app.use('/api', formRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, async () => {
  try{
    await connection
    console.log(`Example app listening at http://localhost:${port}`);
  }catch(error){
    console.log(error)
  }
});