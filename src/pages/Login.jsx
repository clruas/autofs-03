import { Link, useNavigate } from "react-router-dom"
import Input from "../components/Input"
import Button from "../components/Button"
import useSession from "../hooks/useSession"
import { useState } from "react"
import useValidateLogin from "../hooks/useValidateLogin"

function Message({ state }){
	const msg = { 
		checking: { 
			message: 'Autenticando as credenciais do usuário..',
			classes: 'text-blue-600' 
		}, 
		error: {
			message: 'Ocorreu um erro de autenticação. Verifique as suas credenciais.',
			classes: 'text-red-500'
		}
	}
	return state !== 'idle' ? <span className={`text-sm text-center p-4 ${msg[state].classes}`}>{msg[state].message}</span> : null
}

function Login() {
	const { signIn, state } = useSession()
	const navigate = useNavigate()
	const [email, setEmail] = useState(localStorage.getItem('email'))
	const [pass, setPass] = useState(localStorage.getItem('password'))
	const { mailError, passError, validate } = useValidateLogin()

	async function handleLogin(e){
		e.preventDefault()
		const isValid = validate(email, pass)		
		if(isValid){
			const { data, error } = await signIn (email, pass)
			//const { data, error } = await signIn('clruas@gmail.com', '1234')
			if (!error) {
				navigate('/')
			}
		}

	}
	return (
		<div className="container mx-auto md:w-1/4">
			<div className="w-4/5 mx-auto">
				<h1 className="text-2xl text-center font-bold my-6">Login</h1>
				<Input 
					label="Usuário:" 
					type="email" 
					placeholder="Informe o seu usuário." 
					value={email}
					error={mailError}
					onChange={e => setEmail(e.target.value) } 
				/>
				<Input 
					label="Senha:" 
					type="password" 
					placeholder="Informe a sua senha."
					value={pass}
					error={passError}
					onChange={e => setPass(e.target.value) } 
				/>
				<div className="flex flex-col">
					<Link className="text-sm self-end my-2" to="/forgot">Esqueceu a sua senha?</Link>
					<Message state={state} />
					<Button className='my-2' onClick={handleLogin}>Entrar no sistema</Button>
				</div>
			</div>
		</div>
	)
}

export default Login