import porquinho from '../../img/porquinho.png'
import styles from './Projects.module.css'

function Company() {
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Empresa Fictícia</h1>                
            </div>
            <img src={porquinho} />

        </div>
        
        
    )
}

export default Company