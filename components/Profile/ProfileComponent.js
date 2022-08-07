import { useState, Fragment, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ProfileUserData from "./ProfileUserData";
import PetsForm from "../Profile/PetsForm";
import api from "../../axiosApi/api";
import { GeneralContext } from "../../contexts/GeneralContext";
import ProfilePetsData from "./ProfilePetsData";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";

const ProfileComponent = () => {
  const router = useRouter();
  console.log(router.route);
  const [user, setUser] = useState([]);
  const [modal, setModal] = useState(false);
  const { userPets } = useContext(GeneralContext);

  const toggleModal = () => setModal(!modal);
  const closeModal = () => setModal(false);

  const fetchUser = async () => {
    const response = await api.get(`/users/${user.id}`);
    return response.data;
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      if (user) {
        setUser(user);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    closeModal();
  }, [userPets]);

  return (
    <>
      <div className="col-start-1 col-end-3 md:col-start-2 md:col-end-4 md:p-8">
        {/* CARD_PROFILE_USER */}
        {user.map((data) => {
          return (
            <div
              key={data.id}
              className=" border-[1px] border-dark-green h-full rounded-md bg-white p-8 flex"
            >
              {/* USER_NAME_&_IMAGE */}
              <div className=" flex flex-col items-center h-full justify-around ">
                <div>
                  <FaUserCircle className="text-8xl text-[#beb9b9]" />
                </div>
                <div className="flex flex-col justify-end items-center">
                  <h1 className="text-2xl font-bold">
                    {`${data.name} ${data.lastName} `}
                  </h1>
                  <h3 className="text-xl font-semibold mb-2 text-[#868585]">
                    {data.rol}
                  </h3>
                </div>
              </div>
              {/* User Data */}
              <div className="w-[80%] flex flex-col h-[40%] mt-10 ">
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

        {/* ADD NEW_PET_FORM_MODAL */}
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
                    <PetsForm />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>

      {/* CARD_PROFILE_PET */}
      <ProfilePetsData />
    </>
  );
};

export default ProfileComponent;
