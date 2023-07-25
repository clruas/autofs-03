import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { SessionState, UserState } from "../services/store"
import { Navigate, useNavigate } from "react-router-dom"
import { supabase } from "../services/supabase"
import Page from "../pages/Page"

async function getUserData(session){
	const { data, error } = await supabase.from('usuarios').select('id, email, tipo, dados->firstName, dados->lastName').eq('id', session.user.id)
	return data[0]
}

function PrivateRoute() {
	const [session, setSession] = useRecoilState(SessionState)
	const [user, setUser] = useRecoilState(UserState)
	const navigate = useNavigate()
	function init(){
		async function validateSession(){
			const { data, error} = await supabase.auth.getSession()
			if(error){
				console.log(error)
			} else {
				if(data.session){
					const user = await getUserData(data.session)
					setUser(user)
					setSession(data.session)
					navigate('/')
				} else {
					console.log(`NAO TEM`, data.session)
				}
			}
		}
		validateSession()
	}
	useEffect(init, [])
	return (
		Object.keys(session).length > 0 ? <Page /> : <Navigate to='/login' />
	)
}

export default PrivateRoute