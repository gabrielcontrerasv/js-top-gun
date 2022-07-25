import SignupForm from "../../components/signup/SignupForm";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Image from "next/image";
import PetsBanner from "../../public/assets/images/pets-banner.jpg";

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>TGL Pet - Signup</title>
      </Head>
      <Layout>
      <div style={{backgroundColor: '#1F6B6B'}}>
        <p className="text-3xl text-center font-bold text-white">Welcome buddy!</p>
        <Image src={PetsBanner} alt="pets-banner"/>
      </div>
      <div style={{display: 'flex', flexFlow:'row'}}>
    <div className="m-5">
       <p className="text-3xl text-center font-bold" style={{color: '#154D4D', maxWidth: '400px', margin: 'auto'}}>Please fill in the form to access to our products and services for you and your best friend</p>
        <p className="text-3xl text-center font-bold" style={{color: '#154D4D', maxWidth: '400px', margin: 'auto'}}></p>
        <span>
        <p className="text-3xl text-center font-bold" style={{color: '#154D4D', maxWidth: '400px', margin: 'auto'}}>Already registered?</p>
        <p className="text-3xl text-center font-bold underline" style={{color: '#FC8B4C', maxWidth: '400px', margin: 'auto'}}>Login</p>
        </span> 
    </div>
        <SignupForm />
        </div>
      </Layout>
    </>
  );
};

export default SignupPage;
