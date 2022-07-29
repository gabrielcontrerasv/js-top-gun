import Image from "next/image";
import petPhoto from "../../public/assets/images/Grumpy404.png";

const PetsCard = ({ pets, loading }) => {
  loading && <h2>Loading . . .</h2>;
  const urlImage =
    "http://sorprendete.pe/wp-content/uploads/2021/03/mascota1.jpg";

  return (
    <>
      {/* bg-[url('http://sorprendete.pe/wp-content/uploads/2021/03/mascota1.jpg')] bg-cover */}
      {pets.map((pet, key) => (
        <div
          className="rounded-md flex items-end  hover:scale-[1.05] cursor-pointer duration-300 w-[15rem] h-[16rem] overflow-hidden relative"
          key={key}
        >
          <Image src={petPhoto} layout="fill" objectFit="cover" />

          <div className="z-10 w-full h-[50%] bg-gradient-to-b from-[#ffffff00] to-[#030909] pt-10 px-5 ">
            <h2 className="font-bold text-white text-2xl tracking-wider drop-shadow-8xl shadow-yellow">
              {pet.pet}
            </h2>
            <p className="mt-1 text-yellow-400 text-xl font-bold tracking-wider">
              {pet.owner}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PetsCard;
