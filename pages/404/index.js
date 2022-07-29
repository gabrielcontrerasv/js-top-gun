import Image from "next/image";
import Head from "next/head";
import NotFound from "../../components/NotFound/NotFound";

const NotFoundPage = () => {
  // const router = useRouter();
  // const goHome = () => {
  //   router.push('/');
  // }
  return (
    <>
      <Head>
        <title>TGL Pet - Signup</title>
      </Head>
      <NotFound />
    </>
  );
};

export default NotFoundPage;
