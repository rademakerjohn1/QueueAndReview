const db = require("../models");

module.exports = {
  findUnlistened: function(req, res) {
    db.Album.find({ listened: false})
    .sort({createdAt: 'desc'})
    .then(dbAlbum => res.send(dbAlbum))
    .catch(err => res.status(422).json(err));
  },
  findListened: function(req, res) {
    db.Album.find({ listened: true})
    .sort({createdAt: 'desc'})
    .then(dbAlbum => res.send(dbAlbum))
    .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    console.log("fartski")
    db.Album.find(req.query).sort({createdAt: 'desc'})
      .then(dbAlbum => res.json(dbAlbum))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Album.findById(req.params._id)
      .then(dbAlbum => res.json(dbAlbum))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Album.create(req.body)
      .then(dbAlbum => res.json(dbAlbum))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Album.updateOne({ _id: req.params.id }, req.body).then(function(dbAlbum) {
      console.log(res.json(dbAlbum));
    });
  },
  remove: function(req, res) {
    db.Album.findById(req.params.id)
      .then(dbAlbum => dbAlbum.remove())
      .then(dbAlbum => res.json(dbAlbum))
      .catch(err => res.status(422).json(err));
  }
};
