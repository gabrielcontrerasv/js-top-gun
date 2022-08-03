import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ProfileUserData from "./ProfileUserData";
import PetsForm from "../Profile/PetsForm";
import api from "../../axiosApi/api";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const ProfileComponent = () => {
  let [modal, setModal] = useState(false);
  const [user, setUser] = useState([]);
  const [petsUser, setPetsUser] = useState([]);

  const toggleModal = () => setModal(!modal);

  // GET-USER JSON-SERVER

  const deleteHandler = (e) => {
    console.log(e.target);
  };

  const petUserHandler = (data) => {
    setPetsUser(data);
  };

  const removePetHandler = async (id) => {
    await api.delete(`/myPets/${id}`);
    const newPetsList = petsUser.filter((pet) => {
      return pet.id !== id;
    });

    setPetsUser(newPetsList);
  };

  const fetchUser = async () => {
    const response = await api.get("/users");
    return response.data;
  };

  const fetchPets = async () => {
    const response = await api.get("/myPets");
    return response.data;
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      if (user) {
        setUser(user);
      }
    };
    const getPets = async () => {
      const pets = await fetchPets();
      if (pets) setPetsUser(pets);
    };

    getUser();
    getPets();
  }, []);

  return (
    <>
      <div className="col-start-1 col-end-3 md:col-start-2 md:col-end-6 row-span-2 md:p-8">
        {/* CARD_PROFILE_USER */}
        {user.map((data) => {
          return (
            <div
              key={data.id}
              className=" border-[1px] border-dark-green h-full rounded-md flex flex-col items-center"
            >
              <div className="w-full h-[35%] flex justify-center items-center bg-gradient-to-t from-dark-green to-[#147e7e]">
                <div className="border-b-2 border-dark-green w-[80%] h-full flex p-5">
                  {/* User__ Header */}
                  <div className="h-full flex flex-col justify-center pl-5 ">
                    <h1 className="text-4xl font-bold mb-4 text-white">
                      {`${data.name} ${data.lastName} `}
                    </h1>
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {data.rol}
                    </h3>
                    <h3 className="text-2xl font-semibold text-white">
                      {data.address}
                    </h3>
                  </div>
                </div>
              </div>
              {/* User Data */}
              <div className="w-[80%] text-2xl flex flex-col h-[40%] mt-10 ">
                <ProfileUserData data1="Document" data2={data.document} />
                <ProfileUserData data1="Age" data2={data.age} />
                <ProfileUserData data1="Gender" data2={data.gender} />
                <ProfileUserData data1="E-mail" data2={data.email} />
                <ProfileUserData data1="Phone" data2={data.phone} />
              </div>
              <div className="w-[80%] flex gap-5 mt-10">
                <button className=" bg-dark-green  text-white tracking-wider w-[9rem] h-[3.5rem] rounded-md hover:scale-110 duration-100 hover:bg-gradient-to-t from-dark-green to-[#147e7e] transition ease-linear ">
                  Edit profile
                </button>

                <button
                  className=" bg-dark-green text-white tracking-wider w-[9rem] h-[3.5rem] rounded-md hover:scale-110 duration-100 hover:bg-gradient-to-t from-dark-green to-[#147e7e]"
                  onClick={toggleModal}
                >
                  New pet
                </button>
              </div>
            </div>
          );
        })}

        {/* ADD NEW PET FORM_MODAL */}
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
                      Add new pet
                    </Dialog.Title>
                    <PetsForm
                      setPetsUser={petUserHandler}
                      pets={petsUser}
                      toggleModal={toggleModal}
                    />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>

      {/* CARD_PROFILE_PET */}
      <div className="col-start-6 col-end-9 p-8 flex flex-col gap-5">
        {petsUser &&
          petsUser.map((pet) => {
            return (
              <div
                key={pet.id}
                className="border-[1px] border-dark-green p-5 rounded-md max-w-[15rem]"
              >
                <h2 className="text-2xl font-semibold ">{pet.name}</h2>
                <p>Species: {pet.species}</p>
                <p>Gender: {pet.gender}</p>
                <p>Breed: {pet.breed}</p>
                <p>Birthday: {pet.birthday}</p>
                <p>Weight: {pet.weight} kg</p>
                <p>Microchip: {pet.microchip}</p>
                <AiFillDelete
                  className="cursor-pointer text-red-500"
                  onClick={() => removePetHandler(pet.id)}
                />
                <AiFillEdit className="cursor-pointer text-yellow-500" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProfileComponent;
