import React from "react";
import Image from "next/image";
// Assets
/*import Family from "../../public/assets/vet-day-message.jpg";*/

const HomeComponent = () => {
  return (
    <section className="bg-[#fff] h-[100vh] w-full ">
      {/* Banner */}
      <div className="flex gap-5 p-5 h-full justify-around  ">
        <div className=" h-[full] mt-[2rem] w-[50%] p-5">
          <h1 className="text-6xl text-[#1b5a5a] font-bold">
            Welcome to Teams Veterinary Clinic
          </h1>
          <p className="text-xl tracking-wide mt-[2rem]">
            Teams Veterinary Clinic is a full-service animal hospital and
            welcomes both emergency treatment cases as well as pet patients in
            need of routine medical, surgical, and dental care.
          </p>
          <p className="text-xl tracking-wide mt-[2rem]">
            Beyond first-rate pet care, we make our clinic comfortable,
            kid-friendly, and calm, so your pet can relax in the waiting room
            and look forward to meeting our veterinarian.
          </p>
        </div>
        <div className="w-[45%] h-full flex items-end">
          <p>test</p>
        </div>
      </div>

      {/* Services */}
      <div className="w-full h-[30%] flex justify-center py-5">
        <div className="flex justify-evenly items-center h-full bg-[#bfbfbf] w-[80%] rounded-3xl">
          <div className="w-[25%] h-[65%] rounded-3xl bg-white">
            <h2>Consultation</h2>
          </div>
          <div className="w-[25%] h-[65%] rounded-3xl bg-white">
            <h2>Grooming</h2>
          </div>
          <div className="w-[25%] h-[65%] rounded-3xl bg-white">
            <h2>Online Shop</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
