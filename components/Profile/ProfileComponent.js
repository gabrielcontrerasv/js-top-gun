import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import UserPicture from "../../public/assets/images/Grumpy404.png";
import ProfileUserData from "./ProfileUserData";
import PetsForm from "../Profile/PetsForm";

const Userprofile = () => {
  let [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <main className="col-start-2 col-end-8 row-star1 row-span-2 grid grid-cols-3">
      {/* User Section */}
      <section className="col-start-1 col-end-3 p-8">
        <div className="border-[1px] border-dark-green w-[85%] h-full rounded-md flex flex-col items-center">
          <div className="w-full h-[35%] flex justify-center items-center bg-gradient-to-t from-dark-green to-[#147e7e]">
            <div className="border-b-2 border-dark-green w-[80%] h-full flex p-5">
              {/* User Image */}
              <div className="border-2 border-dark-green w-[40%] relative rounded-full overflow-hidden h-[85%] my-auto bg-white">
                <Image
                  src={UserPicture}
                  alt="user picture"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* User Header */}
              <div className="w-[75%] h-full flex flex-col justify-center pl-5 ">
                <h1 className="text-4xl font-bold mb-4 text-white">
                  Nicolas Peña
                </h1>
                <h3 className="text-xl font-semibold mb-2 text-white">User</h3>
                <h3 className="text-xl font-semibold text-white">
                  Envigado, Antioquia
                </h3>
              </div>
            </div>
          </div>
          {/* User Data */}
          <div className="w-[80%] text-xl flex flex-col h-[50%] justify-center ">
            <ProfileUserData data1="Document" data2="1110531223" />
            <ProfileUserData data1="Age" data2="29 years" />
            <ProfileUserData data1="Gender" data2="Male" />
            <ProfileUserData data1="E-mail" data2="testinf@test.com" />
            <ProfileUserData data1="Phone" data2="321-275-6540" />
          </div>
          <div className="w-[80%]">
            <button className=" bg-dark-green  text-white tracking-wider w-[8rem] h-[3rem] rounded-md hover:scale-110 duration-100 hover:bg-gradient-to-t from-dark-green to-[#147e7e] transition ease-linear mr-[2rem]">
              Edit profile
            </button>

            <button
              className=" bg-dark-green text-white tracking-wider w-[8rem] h-[3rem] rounded-md hover:scale-110 duration-100 hover:bg-gradient-to-t from-dark-green to-[#147e7e]"
              onClick={toggleModal}
            >
              New pet
            </button>
          </div>
        </div>
      </section>
      {/* Pet Section */}

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
                <Dialog.Panel className="w-[40rem] h-[35rem] transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-dark-green"
                  >
                    Add new pet
                  </Dialog.Title>
                  <form className="grid grid-cols-2 p-5 gap-y-8 gap-x-5 mt-5">
                    <input
                      className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
                      type="text"
                      placeholder="Name"
                      // {...register("date", { required: true })}
                    />
                    <input
                      className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
                      type="number"
                      placeholder="Microchip"
                      // {...register("date", { required: true })}
                    />
                    <input
                      className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
                      type="text"
                      placeholder="Species"
                      // {...register("date", { required: true })}
                    />
                    <input
                      className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
                      type="text"
                      placeholder="Breed"
                      // {...register("date", { required: true })}
                    />
                    <input
                      className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
                      type="date"
                      placeholder="Birthday"
                      // {...register("date", { required: true })}
                    />
                    <input
                      className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
                      type="number"
                      placeholder="Weight (Kg)"
                      // {...register("date", { required: true })}
                    />
                    <input
                      className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
                      type="text"
                      placeholder="Status"
                      // {...register("date", { required: true })}
                    />
                    <input
                      className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
                      type="text"
                      placeholder="Gender"
                      // {...register("date", { required: true })}
                    />

                    <button
                      className=" bg-[#106363] text-white tracking-wider w-full col-span-2 h-[3rem] rounded-md duration-100 hover:bg-dark-green mt-7"
                      onClick={toggleModal}
                    >
                      Add
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
};

export default Userprofile;
