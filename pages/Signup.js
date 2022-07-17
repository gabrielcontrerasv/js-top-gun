import React from 'react';
import Head from 'next/head';
import Container from '../components/Container';
import SignupForm from '../components/signup/SignupForm';
import PetsBanner from '../assets/images/pets-banner.jpg';
/* import '../styles/signup/page-styles.css'
 */
const Signup = () => {
  return (
    <div>
      <Head>
        <title>TGL Pet - Signup</title>
      </Head>
      <Container>
        <div>
          <div>
            <div style={{background: '#1F6B6B', minHeight: '200px'}}>
            <h1 className="text-4xl font-bold text-white">Welcome buddy!</h1>
            </div>
            <img src={PetsBanner} alt='pets-banner' />
          </div>
          <div>
            <SignupForm />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Signup
