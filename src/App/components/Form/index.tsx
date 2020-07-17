import React, { useState } from 'react';
import Input from '../Input/index.tsx'
import Spinner from '../Spinner/index.tsx'
import { useForm } from './utils/useForm.ts'

const Form = ({sendToBackend, array}) => {
    const [submitForm] = useForm()
    const [isLoad, setIsLoad] = useState(false)
    return (
        <form onSubmit={submitForm(sendToBackend, setIsLoad)}>
        {array.map((input,index) => {
            return (
                <div key={index} style={{padding:'10px'}}>
                    <Input title={input.title} type={input.type} placeholder={input.placeholder} valor={input.valor} setValor={input.setValor}/>
                </div>
            )
        })}
            {!isLoad ?(
                <div style={{padding:'10px', marginTop:'10px'}}>
                    <Input type="submit"/>
                </div>
            ):(
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Spinner />
                </div>
            )}
        </form>
    )
}

export default Form