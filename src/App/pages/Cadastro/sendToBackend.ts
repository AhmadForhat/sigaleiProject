import { auth, db } from '../../../Firebase/index.ts'

const sendToBackend = async state => {
    const {email, pass, name, gitHub} = state
	try {
        await auth.createUserWithEmailAndPassword(email, pass)
        await db.collection('users').add({name, email, gitHub})
        await localStorage.setItem('isLogged',true)
        await localStorage.setItem('email',email)
        window.location.replace('/')
        console.log('Usuário Criado com sucesso!')
    } catch (error) {
        console.log(error)
    }
}

export default sendToBackend