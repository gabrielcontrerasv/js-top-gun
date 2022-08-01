import Head from "next/head";
import { useState, useEffect } from "react";
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

const getWindowSize = () => {
  const { innerWidth: width } = window;
  return { width };
};

const PetsComponent = () => {
  const [pets, setPets] = useState(DUMMY_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const [width, setWidth] = useState();

  useEffect(() => {
    const bgSizeHandler = () => {
      const { width } = getWindowSize();
      setWidth(width);
    };

    if (width < 900) {
      setCardsPerPage(4);
    }

    if (width > 900) {
      setCardsPerPage(6);
    }

    if (width > 1055) {
      setCardsPerPage(8);
    }

    if (width > 1200) {
      setCardsPerPage(12);
    }

    setWidth(window.innerWidth);
    window.addEventListener("resize", bgSizeHandler);
    return () => window.removeEventListener("resize", bgSizeHandler);
  }, [width]);

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
      <section className="w-full h-full flex flex-col col-start-1 col-end-9 row-span-2 sm:pl-[10rem] sm:pr-[2rem] md:pr-[8rem] pl-0 justify-around">
        <div className="w-[100%]">
          <PetsFinder details={DUMMY_DATA} setPets={setPets} />
        </div>

        <div className="flex justify-center h-[60%] flex-wrap gap-5  mt-4">
          <PetsCard pets={currentCards} />
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
