import styles from './login.module.css';
import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import React, {useRef, useState} from 'react';
import {Form} from '@unform/web'
import Input from '../Form/input';
import * as Yup from 'yup';

export function Login () {

    const [user, setUser] = useState({});
    const formRef = useRef(null);
    const [cnpj, setCnpj] = useState('');
    const navigateTo  = useNavigate();
    const validCNPJs = [    {
        cnpj: "91.526.551/0001-49",
        nomeFantasia: "Empresa 1",
        razaoSocial: "Empresa 1 Ltda."
    },
    {
        cnpj: "77.955.732/0001-60",
        nomeFantasia: "Empresa 2",
        razaoSocial: "Empresa 2 Ltda."
    },
    {
        cnpj: "13.571.303/0001-06",
        nomeFantasia: "Empresa 3",
        razaoSocial: "Empresa 3 Ltda."
    }];

    async function handleSubmit(data, {reset}) {
        try {

 
        
        const schema = Yup.object().shape({
            CNPJ: Yup.string().required('CNPJ INVÁLIDO')
        });

        await schema.validate(data, {
            abortEarly: false,
        })

        console.log(data);

        formRef.current.setErrors({});

        reset();
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
            const errorMessages = {};

            err.inner.forEach(error => {
                errorMessages[error.path] = error.message;
            })

            formRef.current.setErrors(errorMessages);

        }
    }
    }
      
      // Função de validação de CNPJ
      

      function handleCnpjChange(event) {
        setCnpj(event.target.value);
      }
    
      function validateCnpj() {
        validCNPJs.map(item => {
            if(item.cnpj === cnpj){
                navigateTo('/Payments')
            } else {
                
            }
        }) 

      }
    
    return (
        <aside className={styles.Container}> 
            <img className={styles.logo} src='assets/logo.png'/>
            <div>
                <div >
                    <h2>
                       Pagamento de Fornecedor
                    </h2>
                    
                    <Form className={styles.form}  ref={formRef} onSubmit={handleSubmit}>
                        <p className={styles.form.strong}>CNPJ</p>
                        <Input className={styles.form} value={cnpj} onChange={handleCnpjChange} type="text" name="CNPJ"/>
                        <button className={styles.button} onClick={validateCnpj} type='submit'>Acessar</button>
                    </Form>
                </div>

            </div>

        </aside> 
    ) 


}

