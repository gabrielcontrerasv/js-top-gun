import { useState, useEffect, useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import UserFinder from "./UserFinder";
import PetsCard from "./PetsCard";
import PetsCardsPagination from "./PetsCardsPagination";
import api from "../../axiosApi/api";
import Navigation from "../Layout/Navigation";
import UserCard from "./UserCard";

const getWindowSize = () => {
  const { innerWidth: width } = window;
  return { width };
};

const UserComponent = () => {
  const [width, setWidth] = useState();
  const { users, setUsers, searchValue, searchResults } =
    useContext(GeneralContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = users.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      setCardsPerPage(10);
    }

    setWidth(window.innerWidth);
    window.addEventListener("resize", getWidthHandler);

    return () => window.removeEventListener("resize", getWidthHandler);
  }, [width]);

  return (
    <>
      <Navigation />
      <section className="grid grid-cols-12 grid-rows-[repeat(10,_minmax(10vh,_10vh))] ">
        {/* SEARCHER MAIN CONTAINER */}
        <div className="col-start-3 col-end-12 row-start-2 row-end-10 ">
          {/* HEADER & SEARCHER */}
          <div className="border-b-[1px] border-primary-text">
            <h1 className="text-primary-text text-4xl font-semibold pb-5">
              Search pet owner by document
            </h1>
          </div>
          <div>
            <UserFinder users={users} setUsers={setUsers} />
          </div>
          {/* USERS GRID */}
          <div className="  w-full h-[55%] grid grid-cols-2 grid-rows-5 gap-2">
            <UserCard
              users={searchValue.length < 2 ? currentCards : searchResults}
            />
          </div>
          {/* PAGINATION */}
          <div>
            <PetsCardsPagination
              cardsPerPage={cardsPerPage}
              totalCards={users.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserComponent;
