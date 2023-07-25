import { useState } from "react"

function useValidateLogin(){
	const [mailError, setMailError] = useState('')
	const [passError, setPassError] = useState('')

	function validate(email, pass){
		setMailError(email ? '' : 'O email informado está em branco.')
		setPassError(pass ? '' : 'A senha informada está em branco')
		return (email !== '' && pass !== '') && (email !== null && pass !== null)
	}
	return { mailError, passError, validate }
}

export default useValidateLogin