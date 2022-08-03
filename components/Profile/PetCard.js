import { useState, useContext, Fragment } from "react";
import { PetsContext } from "../../contexts/PetsContext";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import UpdatePetForm from "./UpdatePetForm";

const PetCard = ({ pet }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const { deletePet } = useContext(PetsContext);
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold ">{pet.name}</h2>
        <p>Species: {pet.species}</p>
        <p>Gender: {pet.gender}</p>
        <p>Breed: {pet.breed}</p>
        <p>Birthday: {pet.birthday}</p>
        <p>Weight: {pet.weight} kg</p>
        <p>Microchip: {pet.microchip}</p>
        <AiFillDelete
          className="cursor-pointer text-red-500"
          onClick={() => deletePet(pet.id)}
        />
        <AiFillEdit
          className="cursor-pointer text-yellow-500"
          onClick={toggleModal}
        />
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
                  <UpdatePetForm toUpdatePet={pet} toggleModal={toggleModal} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PetCard;
