import React, { Component } from "react";
import API from '../utils/API';
import './Search.css'
import Album from '../components/Album/Album'
import AlbumHeader from '../components/AlbumHeader/AlbumHeader'
import ButtonRow from '../components/ButtonRow/ButtonRow'
import Button from '../components/Button/Button'
import AlbumDescription from '../components/AlbumDescription/AlbumDescription'
import AlbumTrackList from '../components/AlbumTrackList/AlbumTrackList'
import AllMusicLogo from '../components/AllMusicLogo/AllMusicLogo'


class Search extends Component {

    state = {
        q: '',
        results: [],
        error: ""
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({error: ""})
        this.getAlbums();
    }

    // Empties any search results in this.state.results, calls TheAudioDB API with search query
    // Filters results for only "Album" and "Mixtape" release formats
    // For each album, makes call to TheAudioDB to get tracklist that corresponds to albumId
    async getAlbums() {
        this.setState({results: []})
        const albums = await API.getAlbums(this.state.q.toLowerCase().split(" ").join("+"));
        if (!albums.data.album) { 
            this.setState({error: "No results found."}) 
            return;
        }
        const filteredAlbums = albums.data.album.filter(album => album.strReleaseFormat === "Album" || album.strReleaseFormat === "Mixtape/Street")
        await filteredAlbums.forEach(album => {
             this.getTracks(album)
        })
    }

    // Stores tracks with corresponding albumId in array, adds array to album object
    // Sorts albums in ascending order by release year, sets result to this.state.results
    async getTracks(album) {
        const trackList = [];
        const trackInfo = await API.getTracks(album.idAlbum)
        if (!trackInfo.data.track) { return }
        trackInfo.data.track.forEach(song => trackList.push(song.strTrack))
        album.tracks = trackList;
        let joined = this.state.results.concat(album)
        joined.sort((a,b) => {
           return a.intYearReleased - b.intYearReleased
        })
        await this.setState({results: joined})
    }

    // Saves album object to database and relocates to "/queue"
    async handleSave(album) {
        await API.saveAlbum({
            albumId: album.idAlbum,
            title: album.strAlbum,
            artist: album.strArtist,
            tracks: album.tracks,
            year: album.intYearReleased,
            thumbnail: album.strAlbumThumb,
            description: album.strDescriptionEN,
            allMusicID: album.strAllMusicID
        })
        window.location = "/queue"
    }

    // Renders search form
    // Maps each result in this.state.results to an AlbumView component 
    render() {

        const { error, results } = this.state

        return (
            <div id="search-wrapper">
                <form className="form" id="search-form">
                    <p>Enter an artist name to search for albums</p>
                    <div className="form-group form-inline">
                        <input type="text" className="form-control" name="q" aria-describedby="text" onChange={this.handleChange} />
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
                <div className="row" id="search-container">
                    { error === "No results found." ? <p id="error">{error}</p> :
                        results.map(item => (
                            <Album
                                key={item.idAlbum}
                                _id={item.idAlbum}
                                thumbnail={item.strAlbumThumb}
                                className="search-result">
                                <AlbumHeader 
                                    title={item.strAlbum}
                                    artist={item.strArtist}
                                    year={item.intYearReleased} />
                                <ButtonRow>
                                    <Button
                                        buttonClass={"btn-primary add-btn"}
                                        buttonText={"Add To Queue"}
                                        onClick={() => this.handleSave(item)} />
                                    <AllMusicLogo allMusicID={item.strAllMusicID} />
                                </ButtonRow>
                                <AlbumDescription description={item.strDescriptionEN} />
                                <AlbumTrackList text={"View Tracklist"} tracks={item.tracks} />
                            </Album>
                        ))
                }
                </div>
            </div>
        )
    }

}

export default Search;