import { auth } from '../../../Firebase/index.ts'

const sendToBackend = async state => {
    const {login:email, pass} = state
	try {
        await auth.signInWithEmailAndPassword(email, pass)
        await localStorage.setItem('isLogged',true)
        await localStorage.setItem('email',email)
        window.location.replace('/')
        console.log('Usuário Criado com sucesso!')
    } catch (error) {
        console.log(error)
    }
}

export default sendToBackend