import SigninForm from "components/signin/SigninForm";
import Head from "next/head";
import Layout from "components/Layout/Layout";
import Image from "next/image";
import PetsBanner from "public/assets/images/pets_banner.jpg";
import classes from './signinPage.module.css';

const SignIn = () => {
  return (
    <>
      <Head>
        <title>TGL Pet - SignIn</title>
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
          <div className="w-2/6 mt-8 mx-12">
            <p
              className="text-xl text-center font-bold m-auto color text-[#154D4D]">
              Please sign in to access to our products and services for
              you and your best friend.
            </p>
            <div className="m-auto mt-12">
              <p
                className="text-xl text-center font-bold text-[#154D4D]"
              >
                Already registered?
              </p>
              <p
                className="text-xl text-center font-bold underline text-[#FC8B4C]"
              >
                Login
              </p>
            </div>
          </div>
          <div className="w-full mr-6 px-6">
          <SigninForm/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignIn;
