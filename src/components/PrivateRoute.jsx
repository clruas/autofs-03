import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { SessionState, UserState } from "../services/store"
import { Navigate, useNavigate } from "react-router-dom"
import { supabase } from "../services/supabase"
import Page from "../pages/Page"
import useSession from "../hooks/useSession"

function PrivateRoute() {
	//const [session, setSession] = useRecoilState(SessionState)
	//const [user, setUser] = useRecoilState(UserState)

	//const { user, state, getSession } = useSession()
	const { user, getSession } = useSession()

	const navigate = useNavigate()
	function init(){
		//console.log(state)
		async function validateSession(){
			await getSession()

			/*
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
			*/
		}
		validateSession()
	}
	useEffect(init, [])
	return (
		//Object.keys(session).length > 0 ? <Page /> : <Navigate to='/login' />
		
		Object.keys(user).length > 0 ? <Page /> :  "vai para o login" //<Navigate to='/login' />

		// <div className="text-4xl">
		// 	{user ? 'Tem user' : 'Nao tem user'}
		// </div>
	)
}

export default PrivateRoute