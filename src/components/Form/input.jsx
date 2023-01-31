import React, {useEffect, useRef} from 'react';
import { useField } from '@unform/core';
import InputMask from 'react-input-mask';


export default function Input({name, ...rest}) {
  const inputRef= useRef();
   const {fieldName, registerField, defaultValue, error} = useField(name)

   useEffect(() => {
    registerField(
      {
        name: fieldName,
        ref: inputRef.current,
        path: 'value'
      }
    )
   },[fieldName, registerField])


  
    return (
      <div>
      <InputMask mask="99.999.999/9999-99" ref={inputRef} defaultValue={defaultValue} {...rest}/>
      {error && <span style={{color:'#F00'}}>{error}</span>}
      </div>
      );
  }
