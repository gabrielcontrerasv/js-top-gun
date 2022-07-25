import SignupForm from "components/signup/SignupForm";
import Head from "next/head";
import Layout from "components/Layout/Layout";
import Image from "next/image";
import PetsBanner from "public/assets/images/pets-banner.jpg";
import classes from './signupPage.module.css';

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>TGL Pet - Signup</title>
      </Head>
      <Layout>
        <div className={classes.banner}>
          <p className="text-3xl text-center font-bold text-white my-6">
            Welcome buddy!
          </p>
          <div className={classes.image}>
          <Image src={PetsBanner} alt="pets-banner" height="250px" width="900px"/>
          </div>
        </div>
        <div className={classes.container}>
          <div className="w-2/6 mt-24 mx-12">
            <p
              className="text-2xl text-center font-bold m-auto color text-[#154D4D]">
              Please signup to access to our products and services for
              you and your best friend.
            </p>
            <div className="m-auto mt-6">
              <p
                className="text-2xl text-center font-bold text-[#154D4D]"
              >
                Already registered?
              </p>
              <p
                className="text-2xl text-center font-bold underline text-[#FC8B4C]"
              >
                Login
              </p>
            </div>
          </div>
          <div className="w-full mx-6">
          <SignupForm/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignupPage;
