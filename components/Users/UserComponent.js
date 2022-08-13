import { useState, useEffect, useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import UserFinder from "./UserFinder";
import Navigation from "../Layout/Navigation";
import Paginate from "../Paginate/Paginate";
import UserCard from "./UserCard";

const UserComponent = () => {
  const { usersCtx, searchValue, searchResults, width, getWidthHandler } =
    useContext(GeneralContext);

  const { users, getAllUsers } = usersCtx;

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = users.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    getWidthHandler();
    if (width < 900) {
      setCardsPerPage(5);
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

    window.addEventListener("resize", getWidthHandler);

    return () => window.removeEventListener("resize", getWidthHandler);
  }, [width]);

  return (
    <>
      <Navigation />
      <section className="grid grid-cols-12 grid-rows-[repeat(10,_minmax(10vh,_10vh))] font-inter ">
        {/* SEARCHER MAIN CONTAINER */}
        <div className="col-start-2 col-end-12 row-start-3 row-end-10 sm:col-start-4 lg:col-start-3 md:col-end-12 md:row-start-2 md:row-end-10">
          {/* HEADER & SEARCHER */}
          <div className="md:border-b-[1px] md:border-primary-text">
            <h1 className="text-primary-text text-2xl font-bold text-center md:text-4xl md:font-semibold md:pb-5 md:text-start">
              Pet owner searcher
            </h1>
          </div>
          <div>
            <UserFinder users={users} />
          </div>
          {/* USERS GRID */}
          <div className=" grid lg:grid-cols-2 lg:grid-rows-5 gap-2">
            <UserCard
              users={
                searchValue.length < 1
                  ? currentCards
                  : searchResults.slice(indexOfFirstCard, indexOfLastCard)
              }
            />
          </div>
          {/* PAGINATION */}
          <div>
            <Paginate
              cardsPerPage={cardsPerPage}
              totalCards={
                searchValue.length < 1 ? users.length : searchResults.length
              }
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
