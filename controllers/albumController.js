const db = require("../models");

module.exports = {

  // Returns unlistened albums in descending order by create time
  findUnlistened: function(req, res) {
    db.User.find({_id: req.user._id})
      .populate({path: 'albums', match: {listened: false}, options: {sort: {createdAt: "desc"}}})
        .select("albums")
          .then(dbAlbum => res.send(dbAlbum))
          .catch(err => res.status(422).json(err));
  },

  // Return listened albums in descending order by create time
  findListened: function(req, res) {
    db.User.find({_id: req.user._id})
      .populate({path: 'albums', match: {listened: true}, options: {sort: {updatedAt: "desc"}}})
        .select("albums")
          .then(dbAlbum => res.send(dbAlbum))
          .catch(err => res.status(422).json(err));
  },

  // Return all albums in descending order by create time
  findAll: function(req, res) {
    db.Album.find(req.query).sort({createdAt: 'desc'})
      .then(dbAlbum => res.json(dbAlbum))
      .catch(err => res.status(422).json(err));
  },

  // Return album with matching id
  findById: function(req, res) {
    db.Album.findById(req.params._id)
      .then(dbAlbum => res.json(dbAlbum))
      .catch(err => res.status(422).json(err));
  },

  // Create album document
  create: function(req, res) {
    db.Album.create(req.body)
      .then(dbAlbum => { 
        db.User.findOneAndUpdate({_id: req.user._id}, { $push: { albums: dbAlbum._id} }, { new: true})
        .then(dbAlbum => res.json(dbAlbum))})
        .catch(err => res.status(422).json(err));
  },

  // Update album with matching id
  update: function(req, res) {
    db.Album.updateOne({ _id: req.params.id }, req.body).then(function(dbAlbum) {
      res.json(dbAlbum);
    });
  },
  
  // Remove album from database
  remove: function(req, res) {
    db.Album.findById(req.params.id)
      .then(dbAlbum => dbAlbum.remove())
      .then(dbAlbum => res.json(dbAlbum))
      .catch(err => res.status(422).json(err));
  }
};
