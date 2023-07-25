import Layout from "../components/Layout"
import Header from "../components/Header"
import { TbPlus, TbCirclePlus } from 'react-icons/tb'
import Button from "../components/Button"

function Instrutores() {
	return (
		<Layout>
			<Header>
				<div className='text-2xl font-bold'>Instrutores</div>
				<Button>Novo</Button>
			</Header>
			<section></section>
		</Layout>
	)
}

export default Instrutores