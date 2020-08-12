import axios from "axios";

export default {

  // Axios requests for TheAudioDB API
  getAlbums: function (q) {
    return axios.get("/api/artist", { params: { q } });
  },

  getTracks: function (q) {
    return axios.get("/api/tracks", { params: { q } });
  },

  // Axios requests for database
  saveAlbum: function (album) {
    return axios.post("/api/albums", album, {
      headers: { 'Content-type': 'application/json' }
    });
  },

  getUnlistenedAlbums: function () {
    return axios.get("/api/albums/unlistened")
  },

  getListenedAlbums: function () {
    return axios.get("/api/albums/listened")
  },

  updateAlbum: function (album) {
    console.log(album)
    return axios.put(`/api/albums/${album._id}`, album);
  },

  getAlbum: function (album) {
    return axios.get(`/api/albums/${album._id}`, album);
  },

  removeAlbum: function (album) {
    return axios.delete(`/api/albums/${album._id}`, album);
  },
};
