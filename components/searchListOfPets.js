import Card from './Card';

function searchListOfPets({ filteredPets }) {
  const filtered = filteredPets.map((filteredpet)=>  
  <Card mascotas = {filteredpet} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default searchListOfPets;