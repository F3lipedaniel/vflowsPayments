import styles from './login.module.css';
import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import React, {useRef, useState, useContext} from 'react';
import {Form} from '@unform/web';
import {validCNPJs} from '../Company/Company';
import Input from '../Form/input';
import * as Yup from 'yup';
import { AuthContext } from '../../contexts/AuthContext';


export function Login () {
    const {setAuth, auth} = useContext(AuthContext);
    const formRef = useRef(null);
    const [cnpj, setCnpj] = useState();
    const navigateTo  = useNavigate();


    async function handleSubmit(data, {reset}) {
        try {

 
        
        const schema = Yup.object().shape({
            CNPJ: Yup.string().matches(/^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/, { message: 'CNPJ INVÁLIDO' }).required('CNPJ OBRIGATÓRIO')
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
      

      function HandleCnpjChange(event) {
        const {value} = event.target
        setCnpj(value);
      }

     function cnpjIsExists() {
        validCNPJs.map(item => {

            if(item.cnpj === cnpj){
                setAuth(item)
                navigateTo('/Payments');
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
                        <Input className={styles.form} value={cnpj} onChange={HandleCnpjChange} type="text" name="CNPJ"/>
                        <button type='submit' onClick={cnpjIsExists} className={styles.button}>Acessar</button>
                    </Form>
                </div>

            </div>

        </aside> 
    ) 


}

