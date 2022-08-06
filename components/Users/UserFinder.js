import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import { BiSearchAlt2 } from "react-icons/bi";

const UserFinder = () => {
  const { searchValue, setSearchValue, searchHandler } =
    useContext(GeneralContext);

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;

    searchHandler(inputValue);
  };

  return (
    <div className="relative top-[-2rem] mt-6 ">
      <BiSearchAlt2
        size={30}
        className="relative top-[2.6rem] text-dark-green border-r-1 border-dark-green w-[4rem] "
      />

      <input
        className="w-full pt-4 pb-2 rounded-md border-[2px] border-dark-green pl-[4rem] focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 placeholder:text-2xl bg-white"
        type="search"
        name="search-form"
        id="search-form"
        placeholder=" Ex.: 1110531223"
        value={searchValue}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default UserFinder;

// const [usersData, setUsersData] = useState(users);
// const [search, setSearch] = useState("");

// const userFiltering = (inputValue) => {
//   const user = users.filter((user) => {
//     if (!user) return users;
//     if (user.name.toLowerCase().includes(inputValue.toLowerCase())) {
//       console.log(user);
//       return user;
//     }
//   });
//   setUsers(user);
// };
