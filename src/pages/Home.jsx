import React from 'react'
import useSession from '../hooks/useSession'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { useRecoilState } from 'recoil'
import { UserState } from '../services/store'

function Home() {
	const [user, setUser] = useRecoilState(UserState)
	return (
		user.tipo == "admin" ? <div>Home admin</div> : <div>home instrutor</div>
	)
}

export default Home