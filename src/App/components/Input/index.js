import React from "react";
import { motion } from 'framer-motion'
import {container, titulo, caixa, caixaButton} from './style'

function Input({title, type, placeholder, valor, setValor}) {
  if(type === 'submit'){
    const tapAnimation = { scale: 0.95 }
    return (
      <motion.input
				style={caixaButton}
				value={'Enviar'}
				whileTap={tapAnimation}
				type='submit'
			/>
    )
  }
    return (
        <label style={container}>
          <p style ={titulo}>{title}</p>
          <input style ={caixa} type={type} placeholder={placeholder} value={valor} onChange={e => setValor(e.target.value)}/>
        </label>
    )
  }

export default Input