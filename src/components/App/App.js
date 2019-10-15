import React, { useState } from 'react';

import { fetchPhotos } from '../../services/flickr.service';
import Photo from '../Photo/Photo';
import Search from '../Search/Search';
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);

  const searchPhotos = async (tags = '') => {
    setIsLoading(true);
    setPhotos([]);
    try {
      const tagsParam = tags.replace(' ', ',');
      const photos = await fetchPhotos(tagsParam);
      setPhotos(photos);
    } catch (e) {
      console.log('Could not retrieve photos. Please check your credentials.');
    }
    setIsLoading(false);
  }

  const renderPhotos = () => {
    
    return photos.map((photo, i) => {
      return (
        <div key={`photo_${i}`} className="column is-one-quarter">
          <Photo photo={photo} />
        </div>
      );
    })
  }

  return (
    <div className="app">

      <header >          
          <div className="container">
            <h2 className="title">
              Flickr Image Search
            </h2>
          </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="content">
            <Search onSearch={searchPhotos} />
            <div className="photoStream columns is-multiline">
              {isLoading
                ? " Loading ... "
                : renderPhotos()
              }
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;

