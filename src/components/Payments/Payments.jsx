import styles from './Payments.module.css';


export function Payments () {
    return (
        <aside className={styles.container}>
            <div className={styles.headerName}>
                <img className={styles.logo} src='assets/logo.png'/>
                <h1 className={styles.title}>
                    PAGAMENTO DE FORNECEDOR
                </h1>
            </div>
            <div>
                <p className={styles.corporateName}>

                </p>
                <p className={styles.FantasyName}>

                </p>
                <p className={styles.cnpj}>

                </p>
            </div>
            <div className={styles.contract}>

            </div>
            <button className={styles.backButton}>

            </button>
            <button className={styles.nextButton}>

            </button>
        </aside>
    ) 


}