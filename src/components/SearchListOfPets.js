import Card from './Card';

function SearchListOfPets({ filteredPets }) {
  const filtered = filteredPets.map((filteredpet)=>  
  <Card mascotas = {filteredpet} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchListOfPets;