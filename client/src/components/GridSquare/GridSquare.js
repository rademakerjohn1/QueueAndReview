import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GridSquare.css'
import Tooltip from '../Tooltip/Tooltip'

// Renders a square with album artwork
// Cick will link to "/edit" or "/view" window locations, passing along album info from state

class GridSquare extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    render() {

        const { hover } = this.state
        const { artist, title, link, rating, album, thumbnail, _id } = this.props

        return (
            <div className="grid-card card tooltip" alt="" id={_id}>
                {hover && <Tooltip title={title} artist={artist} rating={rating} />}
                <Link to={{ pathname: `${link}`, state: { album: album } }}>
                    <img 
                        onMouseLeave={this.toggleHover} 
                        onMouseOver={this.toggleHover} 
                        className="card-img" alt="album-art" 
                        src={thumbnail === null || thumbnail === "" ? process.env.PUBLIC_URL + "/placeholder.png" : thumbnail} 
                    />
                </Link>
            </div>
        )
    }

}

export default GridSquare;