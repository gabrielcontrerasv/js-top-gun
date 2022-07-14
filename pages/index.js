import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import Search from '../components/Search'
import styles from '../styles/Home.module.css'


export default function Home() {
  const mascotas = ['Cocot','Thort',' Maxt',' Leot','ockyt','Tobyt','imbat','runot']
  return (
    <div >
      <Head>
        <title>Tienda Veterinaria</title>
        <meta name="description" /> 
      </Head>

      <main>
       <Header/>
       <Search details={mascotas}/>
          <h3>Tu peludo Mascota es invitado de honor</h3>
       <Card mascotas={mascotas}/>
      </main>
      <footer className={styles.footer}>
        <h5> Copyright 2022</h5>
      </footer>
    </div>
  )
}
