const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRouter = require('./routes/auth');
const teachersRouter = require('./routes/teachers');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/teachers', teachersRouter);

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
