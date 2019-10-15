import React from 'react';

import './Photo.css';

const Photo = ({ photo }) => {
  return (
    <div className="photo">

      <div className="photo_headline">
        <a href={ photo.photoURL } target="_blank">
          <h4 className="photo_title">{ photo.title || 'Unknown' }</h4>
        </a>
      </div>

      <figure>
        <img src={ photo.photoURL || 'https://placekitten.com/460/340' } alt="Cat"/>
      </figure>
    </div>
  );
}

export default Photo;