import styles from './Payments.module.css';
import {AuthContext, AuthProvider } from '../../contexts/AuthContext';
import React, {useRef, useState, useContext} from 'react';
import { Contracts } from '../Contracts/Contracts';

export function Payments () {

    const value = React.useContext(AuthContext);
    console.log()
    return (
        
        <aside className={styles.container}>
            <div className={styles.headerName}>
                <img className={styles.logo} src='assets/logo.png'/>
                <h1 className={styles.title}>
                    PAGAMENTO DE FORNECEDOR
                </h1>
            </div>
            <div className={styles.BoxProvider}>
                <div className={styles.cnpj}>
                    <p>
                         Razão Social: <i>{value.auth.razaoSocial} </i> 
                    </p>
                    <p>CNPJ: <i>{value.auth.cnpj}</i></p>
                </div>
                
                <p className={styles.FantasyName}>
                    Nome Fantasia: <i>{value.auth.nomeFantasia}</i>
                </p>
            </div>
            <div className={styles.BoxProvider}> <div className={styles.contractHeader}>Contratos vinculados</div></div>
            <div className={styles.contracTitles}>
                <div >
                    Nome do contrato
                </div>
                <div>
                    Código do contrato
                </div>
                <div>
                    Retenção Tecnica 
                </div>
                <div>
                    Detalhes
                </div>
            </div>
            <Contracts/>
            <Contracts/>
            <Contracts/>
            <div className={styles.button}>
                <button className={styles.backButton}>
                   Anterior
                </button>
                <button className={styles.nextButton}>
                    Próximo
                </button>
            </div>
        </aside>
        
    ) 
    
    
}