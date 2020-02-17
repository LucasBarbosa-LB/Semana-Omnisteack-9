const express = require ('express');
const mongoose= require ('mongoose');
const routes = require('./router');

const app = express();

mongoose.connect('mongodb+srv://admLucas:kimlucas@cluster0-4fnbw.mongodb.net/week9?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);


app.listen(3333); 