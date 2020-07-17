import React, { useState } from 'react';
import { useMediaPredicate } from "react-media-hook";
import { motion } from 'framer-motion'
import {containerWeb, containerMobile} from './style.ts'
import imgChamada from './image/devChamada.svg'
import Button from '../Button/index.tsx'

const Chamada = () => {
    const webLayout = useMediaPredicate("(min-width: 600px)")
	return (
        <div style={webLayout ? containerWeb : containerMobile}>
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap', marginBottom:'50px'}}>
                <h1 style={{fontSize:'2.3em', maxWidth:'400px', width:'80%', color:'#011C53'}}>Veja as informações do Github da sua empresa com facilidade!</h1>
                <img src={imgChamada} alt="imagem de chamada inicial" style={{width:'40%', minWidth:'250px', alignSelf:'center', zIndex:'2'}}/>
            </div>
            <Button type='link' title='Cadastre-se' funcao='/cadastro'/>
        </div>
    )
}

export default Chamada