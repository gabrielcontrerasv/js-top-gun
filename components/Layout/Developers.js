import Image from "next/image";
import { useState } from "react";
import DeveloperLogo from "../../public/assets/images/Medalla.png";

const Developers = () => {
  const [showTeam, setShowTeam] = useState(false);

  const teamHoverHandler = () => setShowTeam(!showTeam);

  return (
    <div className="absolute z-50 flex right-[10em]">
      <div
        className={`bg-white relative border-2 border-dark-green rounded-md right-2 my-auto p-4 origin-right duration-500  ${
          !showTeam && "scale-0"
        } `}
      >
        {showTeam && (
          <p className={`text-dark-green font-semibold  `}>
            Contact Developer Team
          </p>
        )}
      </div>

      <div className="relative w-[60px] right-[5rem] top-5 sm:w-[100px] cursor-pointer">
        <a href="https://jsteam.vercel.app/" target="_blank">
          <Image
            src={DeveloperLogo}
            onMouseEnter={teamHoverHandler}
            onMouseLeave={teamHoverHandler}
          />
        </a>
      </div>
    </div>
  );
};

export default Developers;
