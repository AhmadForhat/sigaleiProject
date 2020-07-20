import * as React from 'react';
import exitImg from './image/exitImg.svg'

const Logout = () => {
    return (
        <div style={{marginTop:'80px', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <img src={exitImg} style={{width:'40%', maxWidth:'250px'}}/>
            <h2 style={{marginTop:'100px'}}>Deseja sair da página?</h2>
            <a href='/' onClick={() => {
                localStorage.removeItem('isLogged')
                localStorage.removeItem('email')
                localStorage.removeItem('userGithub')
                }}>Logout</a>
        </div>
    )
}

export default Logout