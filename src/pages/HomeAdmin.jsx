import React from 'react'
import useSession from '../hooks/useSession'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { useRecoilState } from 'recoil'
import { UserState } from '../services/store'

function HomeAdmin() {
	const [user, setUser] = useRecoilState(UserState)
	return (
		<Layout>
			<Header>
				<div>
					<span className='text-sm'>Bem vindo,</span>
					<div className='text-2xl font-bold'>{user.firstName} {user.lastName}</div>
				</div>
			</Header>
			<section className=''>
				Informações admin
			</section>
		</Layout>
	)
}

export default HomeAdmin