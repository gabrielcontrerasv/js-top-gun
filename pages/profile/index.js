import UserInfo from "../../components/profile/UserInfo";
import UserPets from "../../components/profile/UserPets";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>TGL Pet - Signup</title>
      </Head>
        <UserInfo />
        <UserPets />
    </>
  );
};

export default Profile;
