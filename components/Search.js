import React, { useState } from 'react';
import searchListOfPets from './searchListOfPets';
import styles from '../styles/Search.module.scss'
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
      <div className={styles.search}>
          <div>
            <h2>Encuentralo!</h2>
          </div>
          <div className={styles.searchBox}>
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Busque su Mascota"
                                value={'test'}
                                onChange={(e) => setQ(e.target.value)}
                            />
                            <span className="sr-only">Buscador de Mascotas</span>
                        </label>
                    </div>
          {searchListOfPets()}
          
      </div>
  );
}

export default Search;