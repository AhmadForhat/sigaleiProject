import React, { useState } from 'react';
import { useMediaPredicate } from "react-media-hook";
import logoBranco from './image/FHT_Branco.png'
import menu from './image/menu-24px.png'
import close from './image/close-24px.png'
import {container, linkStyle, containerMobile} from './style.ts'

const Navbar = ({links}) => {
    const [hamburger, setHamburger] = useState(false);
    const webLayout = useMediaPredicate("(min-width: 600px)")
	return (
        <div style={{height:'100%'}}>
            {
                webLayout ? (
                    <div style={container}>
                        <a href="/"><img src='https://uploads-ssl.webflow.com/5e8bee16fa583a22b3cfbae6/5e8bee16fa583a3beacfbb63_sigalei-logo-branca.png' alt="Logo" style={{width:'120px', margin:'10px'}}/></a>
                        <div style={{display:'flex'}}>
                            {links.map((link, index) => {
                                return (
                                    <div key={index} style={{alignSelf:'center'}}>
                                        <a style={linkStyle} href={link.href}>{link.title}</a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ):(
                    hamburger ? (
                        <>
                        <div style={containerMobile}>
                            <a style={{color:'white', position:'fixed', top:'0'}} onClick={() => setHamburger(false)}><img src={close} alt="Fechar menu" style={{width:'30px', margin:'5px'}}/></a>
                            <a href='/'><img src={logoBranco} alt="Logo" style={{width:'70px', margin:'10px auto', marginTop:'40px'}}/></a>
                            <div style={{display:'flex', flexDirection:'column', marginTop:'40px'}}>
                                {links.map((link,index) => {
                                    return (
                                        <div key={index} style={{alignSelf:'center', marginTop:'40px'}}>
                                            <a style={linkStyle} href={link.href}>{link.title}</a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        </>
                    ):(
                        <div>
                            <a style={{overflow: 'hidden',position:'fixed',top:0}} onClick={() => setHamburger(true)}><img src={menu} alt="Menu Hamburger" style={{width:'30px', margin:'5px'}}/></a>
                        </div>
                    )
                )
            }   
        </div>
	)
}

export default Navbar