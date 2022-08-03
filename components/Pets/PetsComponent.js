import Head from "next/head";
import { useState, useEffect } from "react";
import PetsCard from "./PetsCard";
import PetsFinder from "./PetsFinder";
import PetsCardsPagination from "./PetsCardsPagination";
import api from "../../axiosApi/api";

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
  const [width, setWidth] = useState();
  const [pets, setPets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  const fetchPets = async () => {
    const response = await api.get("/pets");
    return response.data;
  };

  useEffect(() => {
    const getPets = async () => {
      const pets = await fetchPets();
      if (pets) setPets(pets);
    };

    getPets();
  }, []);

  useEffect(() => {
    const getWidthHandler = () => {
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

    if (width > 1300) {
      setCardsPerPage(12);
    }

    setWidth(window.innerWidth);
    window.addEventListener("resize", getWidthHandler);

    return () => window.removeEventListener("resize", getWidthHandler);
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
          <PetsFinder petsData={pets} setPets={setPets} />
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
