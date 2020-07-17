import React from 'react';
import notFoundImg from './image/not-found.png'

const NotFound = () => {
	return (
		<div style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', textAlign:'center'}}> 
            <img src={notFoundImg} alt='Imagem de não encontrado' style={{width:'45%', alignSelf:'center'}}/>
            <h2 style={{color:'#551A8B'}}>Página Não Encontrada!</h2>
			<a href="/" style={{fontSize:'18px'}}>Voltar!</a>
		</div>
	)
}

export default NotFound