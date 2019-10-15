import React from 'react';
import debounce from 'lodash.debounce';

const Search = ({ onSearch }) => {
  const inputRef = React.createRef();
  
  const triggerSearch = () => {
    const { value } = inputRef.current;
    value.length > 2 && onSearch(value);
  };

  const trigger = debounce(triggerSearch, 1000);
  
  return (
    <div className="search content">
      <p>Find image by tags:</p>
      <div className="field">
        <div className="control">
          <input
            className="input search_input" 
            type="text"
            ref={inputRef}
            onChange={trigger}
            placeholder=" enter search tag ..."
          />
        </div>
      </div>
    </div>
  );
}

export default Search;