import React, { useState } from 'react'
import { useMediaPredicate } from "react-media-hook";
import Form from '../../components/Form/index.tsx'
import imgLogin from './image/imgLogin.png'
import {boxContainer, boxContainerMobile} from './styles.ts'
import sendToBackend from './sendToBackend.ts'

const Login = () => {
	const [login, setLogin] = useState('')
	const [pass, setPass] = useState('')
	const [notFound, setNotFound] = useState('')
	const state = {setPass, setLogin, login, pass, setNotFound, notFound}
	const arrayForm = [
		{
			title:'Login',
			type:'text',
			placeholder:'sigalei@gmail.com',
			valor: login,
			setValor: setLogin
		},
		{
			title:'Senha',
			type:'password',
			placeholder:'**********',
			valor: pass,
			setValor: setPass
		}
	]
	const webLayout = useMediaPredicate("(min-width: 600px)")
	if(webLayout)
		return (
			<>
		<div style={{display:'flex', justifyContent:'space-around'}}>
				<div style={webLayout ? boxContainer: boxContainerMobile}>
					<Form sendToBackend={() => sendToBackend(state)} array={arrayForm}/>
					{notFound && <p style={{fontSize:'14px', textAlign:'center', color:'red', marginBottom:'20px'}}>{notFound}</p>}
					<a style={{fontSize:'14px', textAlign:'center'}} href='cadastro'>Ainda não possuí conta?</a>
				</div>
				<div style={{width:'40%', display:'flex', marginTop:'150px'}}>
					<img src={imgLogin} style={{width:'100%', alignSelf:'center', margin:'0 auto'}}/>
				</div>
			</div>
			</>
		)
	return (
		<>
			<div style={boxContainerMobile}>
				<Form sendToBackend={() => sendToBackend(state)} array={arrayForm}/>
				{notFound && <p style={{fontSize:'14px', textAlign:'center', color:'red', marginBottom:'20px'}}>{notFound}</p>}
				<a style={{fontSize:'14px', textAlign:'center', color:''}} href='cadastro'>Ainda não possuí conta?</a>
			</div>
		</>
	)
}

export default Login