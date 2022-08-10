import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import api from "../../axiosApi/api";
import Navigation from "../Layout/Navigation";
import PetTable from "./PetTable";
import { AiFillEdit } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import UpdatePetForm from "./UpdatePetForm";

const fetchPet = async (petId) => {
  try {
    const response = await api.get(`pets/${petId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const PetProfile = () => {
  const router = useRouter();
  const [pet, setPet] = useState([]);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    const getPet = async () => {
      const pet = await fetchPet(router.query.index);
      if (pet) {
        setPet(pet);
      }
    };
    getPet();
  }, []);

  return (
    <div>
      <Navigation />
      <section className="grid grid-cols-12 grid-rows-[repeat(10,_minmax(10vh,_10vh))] font-inter ">
        <div className="col-start-3 col-end-12 row-start-2 row-end-10 ">
          {/* PET DETAILS CONTAINER */}
          <div className="w-full h-[50%]  flex gap-5">
            {/* PET IMAGE */}
            <div className="w-[30%] h-full bg-slate-200"></div>
            {/* PET DETAILS */}
            <div className="w-[70%]  flex flex-col gap-5 ">
              <div className="flex justify-between">
                <h1 className="font-bold text-4xl text-primary-text flex justify-between items-end">
                  {pet.name}
                </h1>
                <div
                  className="flex gap-2 cursor-pointer text-primary-text  items-center hover:border-b-[1px] hover:border-dark-green hover:scale-[1.1] duration-300 hover:font-semibold"
                  onClick={toggleModal}
                >
                  Update Data
                  <AiFillEdit className="text-xl" />
                </div>
              </div>
              <div className="w-full h-[70%] flex flex-col gap-1 justify-between text-2xl text-primary-text tracking-wide ">
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Code number:</p>
                  <p>{pet.microchip}</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">species: </p>
                  <p>{pet.species}</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Weight:</p>
                  <p>{pet.weight}</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Age:</p>
                  <p>{pet.birthday} years</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Status:</p>
                  <p>{pet.status}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* RECORDS */}
            <PetTable />
          </div>
        </div>

        <Transition appear show={modal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={toggleModal}>
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
                      Update Data
                    </Dialog.Title>
                    <UpdatePetForm
                      toUpdatePet={pet}
                      toggleModal={toggleModal}
                    />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>
    </div>
  );
};

export default PetProfile;
