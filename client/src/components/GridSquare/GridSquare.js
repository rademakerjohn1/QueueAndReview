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
        return (
            <div className="queue-card card tooltip" alt="" key={this.props.albumId} id={this.props.albumId}>
                {this.state.hover && <Tooltip title={this.props.title} artist={this.props.artist} rating={this.props.rating} />}
                <Link to={{ pathname: `${this.props.link}`, state: { album: this.props.album } }}>
                    <img onMouseLeave={this.toggleHover} onMouseOver={this.toggleHover} className="card-img" alt="album-art" src={this.props.thumbnail === null ? process.env.PUBLIC_URL + "/placeholder.png" : this.props.thumbnail} />
                </Link>
            </div>
        )
    }

}

export default GridSquare;