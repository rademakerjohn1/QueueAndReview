import React from 'react'

// "this.state.open" is changed on click to toggle full description visibility
// If !this.state.open, render first 250 characters of description
// Else, render full description

class AlbumDescriptionLong extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.toggleDescription = this.toggleDescription.bind(this);
        }

    toggleDescription(e) {
        this.setState({open: !this.state.open})
    }
    render() {
        return (
            !this.state.open ? 
                <p className="description-text">{this.props.description.substring(0,250)}...
                    <span className="description-toggle" onClick={(e) => this.toggleDescription(e)}>More</span>
                </p> : 
                <div>
                <p className="description-text">{this.props.description}</p>
                <p className="description-toggle" onClick={(e) => this.toggleDescription(e)}>Less</p>
                </div>
        )
    }
}

export default AlbumDescriptionLong;