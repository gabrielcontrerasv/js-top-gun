import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
function Search({ details,setMascotas }) {
  const [searchField, setSearchField] = useState("");
  const filteredpets = (value)=> details.filter(
    pet => pet.toLowerCase().includes(value.toLowerCase())
  );


  function Searchpet(value) {
      console.log(value)
      setMascotas([...filteredpets(value)])  
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
              
                                onChange={(e) => Searchpet(e.target.value)}
                            />
                           <button>Buscar</button>
                        </label>
                    </div>
      </div>
  );
}

export default Search;