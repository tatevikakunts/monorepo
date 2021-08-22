import React from 'react'

import LikeDislike from "./LikeDislike";

const PhotoCard = ({photo}) => {

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card">
                <img src={photo.src} alt={photo.title}/>
                <div className="card-body">
                    <p className="card-title">{photo.title}</p>
                    {/*<p className="card-text"></p>*/}
                    <LikeDislike photo={photo} id = {photo.id} reaction = "like"  /><span>{photo.like}</span>
                    <LikeDislike photo={photo} id = {photo.id} reaction = "dislike" /><span>{photo.dislike}</span>

                </div>
            </div>
        </div>

    )
}

export default PhotoCard