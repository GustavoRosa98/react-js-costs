import { BsTelephone } from "react-icons/bs"
import styles from './Projects.module.css'

function Contact() {
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Contato</h1>                
            </div>
            <span><BsTelephone /></span> 4002-8922

        </div>
    )
}

export default Contact