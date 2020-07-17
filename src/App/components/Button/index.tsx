import React from 'react';
import { useMediaPredicate } from 'react-media-hook'; 
import {buttonLink, buttonLinkMobile, buttonForm} from './style.ts'

const Button = ({type, title, funcao}) => {
    const webLayout = useMediaPredicate("(min-width: 600px)")
    if(type === 'submit') return (
    <button style={{width:'40%', margin:'0 auto'}} onClick={() => funcao}>{title}</button>
    )
    if(type === 'link') return(
        <a href={funcao} style={{width:'100%', display:'flex'}}><button style={webLayout ? buttonLink: buttonLinkMobile}>{title}</button></a>
    )
    if(type === 'form') return(
        <button type='submit' style={buttonForm} onClick={funcao}>{title}</button>
    )
}

export default Button