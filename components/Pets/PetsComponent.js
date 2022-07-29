import Head from "next/head";
import { useEffect, useState } from "react";
import PetsCard from "./PetsCard";
import PetsFinder from "./PetsFinder";
import PetsCardsPagination from "./PetsCardsPagination";

const DUMMY_DATA = [
  { owner: "Nicolas", pet: "Thor" },
  { owner: "Gabriel", pet: "Rena" },
  { owner: "Luis", pet: "Zoe" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Nicolas", pet: "Thor" },
  { owner: "Gabriel", pet: "Rena" },
  { owner: "Luis", pet: "Zoe" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Nicolas", pet: "Thor" },
  { owner: "Gabriel", pet: "Rena" },
  { owner: "Luis", pet: "Zoe" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Nicolas", pet: "Thor" },
  { owner: "Gabriel", pet: "Rena" },
  { owner: "Luis", pet: "Zoe" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Nicolas", pet: "Thor" },
  { owner: "Gabriel", pet: "Rena" },
  { owner: "Luis", pet: "Zoe" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Nicolas", pet: "Thor" },
  { owner: "Gabriel", pet: "Rena" },
  { owner: "Luis", pet: "Zoe" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
  { owner: "Marcos", pet: "Hades" },
  { owner: "Ana", pet: "Simba" },
];

const PetsComponent = () => {
  const [pets, setPets] = useState(DUMMY_DATA);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pets.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Head>
        <title>Pets Finder || App</title>
        <meta name="description" />
      </Head>
      <section className="col-start-2 col-end-8 p-8 h-[44rem]">
        <div className="w-[100%]">
          <PetsFinder details={DUMMY_DATA} setPets={setPets} />
        </div>
        {/* grid grid-cols-3 grid-rows-3 grid-flow-row-dense gap-5 */}
        <div className="h-[35rem] flex-wrap gap-5 flex mt-5 justify-center">
          <PetsCard pets={currentCards} loading={loading} />
        </div>
        <PetsCardsPagination
          cardsPerPage={cardsPerPage}
          totalCards={pets.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </section>
    </>
  );
};

export default PetsComponent;
