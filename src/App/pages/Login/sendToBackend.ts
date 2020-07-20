import { auth } from '../../../Firebase/index.ts'

const sendToBackend = async state => {
    const {login:email, pass, setNotFound} = state
	try {
        await auth.signInWithEmailAndPassword(email, pass)
        await localStorage.setItem('isLogged',true)
        await localStorage.setItem('email',email)
        window.location.replace('/')
        console.log('Usuário logado com sucesso!')
    } catch (error) {
        if(error.code === 'auth/user-not-found'){
            setNotFound('Usuário não encontrado')
        }
        if(error.code === 'auth/wrong-password'){
            setNotFound('Senha incorreta')
        }
        else{
            console.log(error)
        }
    }
}

export default sendToBackend