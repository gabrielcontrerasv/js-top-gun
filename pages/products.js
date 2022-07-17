import React from "react";
import Head from 'next/head';
import Container from '../components/Container';

const Products = () => {
  return (
    <div>
      <Head>
        <title>TGL Pet - Products</title>
      </Head>
      <Container>
        <h1 className="text-4xl font-bold">Products page</h1>
      </Container>
    </div>
  );
};

export default Products;
