import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import PetsForm from "../Profile/PetsForm";
import Image from "next/image";
import BgPetCard from "../../public/assets/images/BgPetCard.webp";
import api from "../../axiosApi/api";
import Navigation from "../Layout/Navigation";

const fetchUser = async (userId) => {
  const response = await api.get(`users/${userId}`);
  return response.data;
};

const MainProfile = () => {
  const [user, setUser] = useState([]);
  const router = useRouter();
  const pets = user.pets;

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  const closeModal = () => setModal(false);

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser(router.query.userId);
      if (user) {
        setUser(user);
      }
    };
    getUser();
  }, []);

  return (
    <div>
      <Navigation />
      <section className="grid grid-cols-12 grid-rows-[repeat(10,_minmax(10vh,_10vh))] ">
        <div className="col-start-3 col-end-12 row-start-2 row-end-10 ">
          {/* USER DETAILS CONTAINER */}
          <div className="w-full h-[50%]  flex gap-5">
            {/* USER IMAGE */}
            <div className="w-[30%] h-full bg-slate-200"></div>
            {/* USER DETAILS */}
            <div className="w-[70%]  flex flex-col gap-5 ">
              <h1 className="font-bold text-4xl text-primary-text">
                {user.name} {user.lastName}
              </h1>
              <div className="w-full h-[70%] flex flex-col gap-1 justify-between text-2xl text-primary-text tracking-wide ">
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Document:</p>
                  <p>{user.document}</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">E-mail: </p>
                  <p>{user.email}</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Phone:</p>
                  <p>{user.phone}</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Age:</p>
                  <p>{user.age} years</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Address:</p>
                  <p>{user.address}</p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-5 mt-10">
              <button className="text-sm bg-dark-green  text-white tracking-wider w-[7rem] h-[3rem] rounded-md hover:scale-110 duration-100 hover:bg-gradient-to-t from-dark-green to-[#147e7e] transition ease-linear ">
                Edit profile
              </button>

              <button
                className="text-sm bg-dark-green text-white tracking-wider w-[7rem] h-[3rem] rounded-md hover:scale-110 duration-100 hover:bg-gradient-to-t from-dark-green to-[#147e7e]"
                onClick={toggleModal}
              >
                New pet
              </button>
            </div>
          </div>
          {/* PETS CARDS CONTAINER */}
          <div className="w-full h-[50%] flex justify-start items-center gap-4 ">
            {pets?.map((pet) => {
              return (
                <div className=" w-[15rem] h-[15rem]  border-[1px] border-dark-green rounded-md relative overflow-hidden px-5 py-2">
                  <Image
                    src={BgPetCard}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                  />

                  <div className="z-50 relative flex flex-col gap-8  ">
                    <h1 className="text-3xl text-white tracking-wider">
                      {pet.name}
                    </h1>
                    <div className="flex flex-col gap-1">
                      <div className="text-primary-green flex justify-between ">
                        <p className="font-semibold">Species:</p>
                        <p>{pet.species}</p>
                      </div>
                      <div className="text-primary-green flex justify-between ">
                        <p className="font-semibold">Gender:</p>
                        <p>{pet.gender}</p>
                      </div>
                      <div className="text-primary-green flex justify-between ">
                        <p className="font-semibold">Weight:</p>
                        <p>{pet.species}</p>
                      </div>
                      <div className="text-primary-green flex justify-between ">
                        <p className="font-semibold">Breed:</p>
                        <p>{pet.breed}</p>
                      </div>
                      <div className="text-primary-green flex justify-between ">
                        <p className="font-semibold">Birthday:</p>
                        <p>{pet.birthday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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
                      Add new pet
                    </Dialog.Title>
                    <PetsForm />
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

export default MainProfile;
