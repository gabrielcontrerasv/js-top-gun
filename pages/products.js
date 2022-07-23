import React from "react";
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

const Products = () => {
  return (
    <>
      <Head>
        <title>TGL Pet - Products</title>
      </Head>
      <Layout>
        <h1 className="text-4xl font-bold">Products page</h1>
      </Layout>
    </>
  );
};

export default Products;
