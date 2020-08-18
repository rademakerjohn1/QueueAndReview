const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes');
const app = express();
const session = require('express-session')
const passport = require('passport')

const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport)


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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, (err) => {
    if (err) throw console.log(err);
    console.log(`Listening at http://localhost:${PORT}`);
})
