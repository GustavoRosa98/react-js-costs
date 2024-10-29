import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import savings from '../../img/savings.svg'


function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Seja bem-vindo ao <span>Costs</span></h1>
            <p>Comece a estilizar seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={savings} alt="Costs"/>
        </section>
    )
}

export default Home