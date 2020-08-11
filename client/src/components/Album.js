import React from "react";
import './Album.css'
import AlbumImage from './AlbumImage'
import AlbumHeader from './AlbumHeader';

function Album(props) {

        return (
            <div className="search-result-card card" key={props.idAlbum}>
                <div className="row">
                    <AlbumImage img={props.img} id={props.id} />
                    <div className="col-md-8 col-sm-12">
                        <AlbumHeader title={props.title} artist={props.artist} year={props.year} />
                        {props.children}
                    </div>
                </div>
            </div>
        )
}
export default Album;