import styles from '../styles/Card.module.css'
function Card({mascotas}) {
    return (
    <> 
        {mascotas.map((mascota,key) => 
            <div className={styles.card} key={key}>
            <a>
              <h2>{mascota.toUpperCase()}</h2>
              <img src='http://sorprendete.pe/wp-content/uploads/2021/03/mascota1.jpg' width={200} height={200}/>
              <p>Edad : </p>
              <p>Estado: </p>
              <p>Ultima visita :</p>
              <p>Propietarrio: </p>              
            </a>
          </div>
            )
            }
    </>
            )
}

  export default Card