import Layout from "../components/Layout"
import Header from "../components/Header"
import Button from "../components/Button"

function Alunos() {
	return (
		<Layout>
			<Header>
				<div className='text-2xl font-bold'>Alunos</div>
				<Button>Novo</Button>
			</Header>
			<section>
				<table className="bg-white">
					<th>
						<td>Campo</td>
					</th>
					<tr>
						<td>Teste</td>
					</tr>
				</table>
			</section>
		</Layout>
	)
}

export default Alunos