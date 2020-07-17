import React from 'react';
import {container} from './style.ts'
import imgFacebook from './image/facebook.png'
import imgInstagram from './image/instagram.png'
import imgLinkedin from './image/linkedin.png'

const Footer = () => {
    return (
        <div style={container}>
            <h2 style={{alignSelf:'center'}}>Todos direitos Reservador para Sigalei</h2>
            <div style={{alignSelf:'center'}}>
                <a href="https://www.facebook.com/" target='blank'><img style={{width:'60px'}} src={imgFacebook} alt='logo facebook'/></a>
                <a href="https://www.instagram.com/" target='blank'><img style={{width:'60px'}} src={imgInstagram} alt='logo instagram'/></a>
                <a href="https://www.linkedin.com/" target='blank'><img style={{width:'60px'}} src={imgLinkedin} alt='logo linkedin'/></a>
            </div>
        </div>
    )
}

export default Footer