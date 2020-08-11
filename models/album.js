const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    albumId: { type: String, required: true },
    title: { type: String, required: true },
    artist: { type: String, required: true},
    tracks: { type: [String], required: true },
    year: { type: Number, required: true },
    thumbnail: { type: String },
    description: { type: String },
    listened: { type: Boolean, default: false },
    allMusicID: { type: String },
    dateListened: { type: Date },
    review: { type: String },
    selectedTracks: { type: [String] },
    rating: { type: Number },
    // discogsId: { type: String, required: true, unique: true },
    // wikiDataId: { type: String, required: true, unique: true },
},
{timestamps: true});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
