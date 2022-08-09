// React Features
import { useState, useEffect, Fragment, useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
// Next Features
import { useRouter } from "next/router";
import Image from "next/image";
// Third Party Library
import { Dialog, Transition } from "@headlessui/react";
import { AiFillEdit } from "react-icons/ai";
import { IoPawSharp } from "react-icons/io5";
// Components
import Navigation from "../Layout/Navigation";
import PetsForm from "./PetsForm";
import UpdateUserForm from "./UpdateUserForm";
import PetCard from "./PetCard";
import UserData from "./UserData";
//Assets
import MainBg from "../../public/assets/images/Shiny Overlay.svg";

// ----------------------------------------------------------------------------------------

const MainProfile = () => {
  const [userGender, setUserGender] = useState("");
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [toggleForm, setToggleForm] = useState(true);
  const { userPets, user, getUser } = useContext(GeneralContext);

  const toggleModal = (e) => {
    if (!e) return setModal(!modal);
    const actionType = e.target.innerText;
    if (actionType === "Edit") setToggleForm(true);
    if (actionType === "Add") setToggleForm(false);
    setModal(!modal);
  };
  const closeModal = () => setModal(false);

  useEffect(() => {
    closeModal();
  }, []);

  useEffect(() => {
    getUser(router.query.userId);
    setUserGender(user.gender);
  }, []);

  return (
    <>
      <Navigation />
      <section className="grid grid-cols-12 grid-rows-mobileAuto sm:grid-rows-[repeat(10,_minmax(10vh,_10vh))] font-inter h-full w-full ">
        <div className="col-start-1 col-end-13 sm:col-start-3 sm:col-end-12 sm:row-start-2 sm:row-end-10 pt-[6rem] sm:pt-0">
          {/* USER__DETAILS__CONTAINER */}
          <UserData user={user} toggleModal={toggleModal} />

          {/* PETS CARDS CONTAINER */}
          <ul className="w-full flex flex-wrap sm:flex-nowrap justify-center items-center gap-8 mt-[1rem] sm:mt-10">
            {userPets?.map((pet) => {
              return <PetCard key={pet.id} pet={pet} />;
            })}
          </ul>
        </div>

        {/* ADD NEW PET MODAL */}
        <Transition appear show={modal} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={toggleModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-[40rem] h-[35rem] transform overflow-hidden rounded-md bg-white p-10 text-left align-middle shadow-xl transition-all ">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-semibold  text-dark-green border-b-[1px] border-dark-green pb-5 "
                    >
                      {toggleForm ? "Edit" : "Add"}
                    </Dialog.Title>
                    {toggleForm ? (
                      <UpdateUserForm
                        toUpdateUser={user}
                        toggleModal={toggleModal}
                      />
                    ) : (
                      <PetsForm closeModal={closeModal} />
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>
    </>
  );
};

export default MainProfile;
