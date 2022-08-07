import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import BgPetCard from "../../public/assets/images/BgPetCard.webp";
import api from "../../axiosApi/api";
import Navigation from "../Layout/Navigation";

const fetchUser = async (petId) => {
  const response = await api.get(`pets/${petId}`);
  return response.data;
};

const PetProfile = () => {
  // const [user, setUser] = useState([]);
  // const router = useRouter();
  // const pets = user.pets;

  // useEffect(() => {
  //   const getUser = async () => {
  //     const user = await fetchUser(router.query.userId);
  //     if (user) {
  //       setUser(user);
  //     }
  //   };
  //   getUser();
  // }, []);

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
                {/* {user.name} {user.lastName} */}
              </h1>
              <div className="w-full h-[70%] flex flex-col gap-1 justify-between text-2xl text-primary-text tracking-wide ">
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">code number:</p>
                  {/* <p>{user.document}</p> */}
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Inter ? : </p>
                  {/* <p>{user.email}</p> */}
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Weight:</p>
                  {/* <p>{user.phone}</p> */}
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Age:</p>
                  {/* <p>{user.age} years</p> */}
                </div>
                <div className="flex justify-between border-b-[1px] border-dark-green">
                  <p className="font-semibold pb-2">Status:</p>
                  {/* <p>{user.address}</p> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* RECORDS */}
            <table class="table-auto">
              <thead>
                <tr>
                  <th>Appointment</th>
                  <th>Specialist</th>
                  <th>Diagnostic</th>
                  <th>Treatment</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetProfile;
