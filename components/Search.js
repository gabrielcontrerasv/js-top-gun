import React, { useState } from 'react';
import Scroll from './Scroll';
import searchListOfPets from './searchListOfPets';

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
      <Scroll>
        <searchListOfPets filteredpets={filteredpets} />
      </Scroll>
    );
  }

  return (
    <>
    <section >
      <div >
        <h2 style={{margin: 'auto'}} >Buscador de mascotas</h2>
      </div>
      <div >
        <input 
          className=""
          type = "search" 
          placeholder = "Busque su mascota" 
          onChange = {Searchpet}
        />
      </div>
      {searchListOfPets()}
    </section>
    </>
  );
}

export default Search;