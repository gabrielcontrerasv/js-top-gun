import Head from 'next/head'
import { useState } from 'react'
import Card from '../components/Layout/Card'
import Search from '../components/Layout/Search'
import styles from '../styles/Services.module.css'



const data = ['Cocot','Thort',' Maxt',' Leot','ockyt','Tobyt','imbat','runot']

export default function Services() {
  const [mascotas,setMascotas] = useState([...data])
  return (
    <div className={styles.container}>
      <div className={styles.Header}><Head>
        <title>Tienda Veterinaria</title>
        <meta name="description" /> 
        </Head>
      </div>

       <div className={styles.SearchContainer}>
          <Search  className={styles.Search} details={data} setMascotas={setMascotas}/>
        </div>

        <main className={styles.Main}>
           <Card mascotas={mascotas}/>
        </main>

      <div className={styles.Footer}>
         <footer>
            <h5> Copyright 2022</h5>
        </footer>
        </div>
    </div> 
  )
}
