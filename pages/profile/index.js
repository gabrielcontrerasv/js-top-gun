import UserInfo from "../../components/profile/UserInfo";
import UserPets from "../../components/profile/UserPets";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";

const Profile = () => {
  return (
    <>
      <Head>
        <title>TGL Pet - Signup</title>
      </Head>
      <Layout>
        <UserInfo />
        <UserPets />
      </Layout>
    </>
  );
};

export default Profile;
