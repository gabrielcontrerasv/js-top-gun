import React, { useState } from 'react';
import searchListOfPets from './SearchListOfPets';
import styles from '../styles/Home.module.css'
function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const filteredpets = details.filter(
    pet => {
      return (
        pet.toLowerCase().includes(searchField.toLowerCase())
      );
    }
  );

  const Searchpet = e => {
    setSearchField(e.target.value);
  };

  function searchListOfPets() {
    return (
        <searchListOfPets filteredpets={filteredpets} />
    );
  }

  return (
      <div className={styles.search} style={{justifyContent:'center'}}>
          <div style={{justifyContent:'center'}}>
            <h2>Lo que tu mascota necesita esta aqui, Encuentralo!</h2>
          </div>
          <div className={styles.searchBox}>
                        <label htmlFor="search-form">
                            <input style={{marginBottom:'25px', marginRight : '20px' }}
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Busque su Mascota"
                                value={'test'}
                                onChange={(e) => setQ(e.target.value)}
                            />
                           <button>Buscar</button>
                        </label>
                    </div>
          {searchListOfPets()}
          
      </div>
  );
}

export default Search;