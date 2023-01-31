import React from 'react';
import {AuthContext, AuthProvider } from '../../contexts/AuthContext';
import styles from './contracts.module.css';

export function Contracts () {
    const value = React.useContext(AuthContext);
    console.log(AuthContext)
    return (
        <div className={styles.contracts}>
                <div>
                    {value.auth.contract.titleContract}
                </div>
                <div>
                    {value.auth.contract.idContract}
                </div>
                <div className={styles.technicalRetention}>
                {value.auth.contract.technicalRetention }
                </div>
                   <img className={styles.search} src='assets/magnifying-glass-duotone.svg'/>
        </div>
    )
}

export default Contracts