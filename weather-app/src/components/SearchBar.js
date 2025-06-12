import { useState } from 'react';
function SearchBar(props) {
    const [city, setCity] = useState('');
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Enter city name" 
                value={city}
                onChange={e => setCity(e.target.value)} className="search-input"
            />
            <button onClick={() => props.onSearch(city)} className="search-button">Search</button>
        </div>
    );
}

export default SearchBar;