import React from 'react';

import './Loading.css';

 const Loading = () => {
  return (
    <div className="loading">
      <div className="lds-css ng-scope">
        <div className="lds-flickr">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;