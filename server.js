const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/albumsdb",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

mongoose.set('useFindAndModify', false);

app.use(morgan('tiny'));

app.listen(PORT, (err) => {
    if (err) throw console.log(err);
    console.log(`Listening at http://localhost:${PORT}`);
})
