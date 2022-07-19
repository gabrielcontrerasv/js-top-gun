import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import Search from '../components/Search'
import styles from '../styles/Home.module.css'


export default function Home() {
  const mascotas = ['Cocot','Thort',' Maxt',' Leot','ockyt','Tobyt','imbat','runot']
  return (

    <div className={styles.container}>
      <div className={styles.Header}><Head>
        <title>Tienda Veterinaria</title>
        <meta name="description" /> 
        </Head>
        <Header/>
      </div>

       <div className={styles.SearchContainer}>
          <Search  details={mascotas}/>
        </div>

        <main className={styles.Main}>
           <Card mascotas={mascotas}/>
        </main>

        <div className={styles.SideBar}>
           sidebar 
        </div>

      <div className={styles.Footer}>
         <footer>
            <h5> Copyright 2022</h5>
        </footer>
        </div>
    </div> 
  )
}
