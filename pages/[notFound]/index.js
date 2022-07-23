import Image from "next/image";
import Head from "next/head";
import Logo404 from "../../public/assets/images/404.svg";
import classes from "./notFound.module.css";
import Layout from "../../components/Layout/Layout";
import {useRouter} from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  }
  return (
    <>
      <Head>
        <title>TGL Pet - Signup</title>
      </Head>
      <Layout>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Image src={Logo404} alt="404-logo" className="object-center" width='500px'/>
        </div>
        <h1 className="text-3xl text-center font-bold" style={{color: '#154D4D', maxWidth: '400px', margin: 'auto'}}>Oops... it looks like you’ve reached a bad path buddy :/ </h1>
        <div className="m-auto w-32">
        <button className="bg-[#154D4D] hover:bg-[#FEDB54] text-white hover:text-black font-bold py-3 px-6 rounded-full my-4" style={{marginLeft: 'auto'}} onClick={goHome}>Go Home</button>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
