import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RecoilRoot } from "recoil"

import Alunos from "../pages/Alunos"
import Home from "../pages/Home"
import Login from "../pages/Login"
import PrivateRoute from "./PrivateRoute"
import Forgot from "../pages/Forgot"
import Instrutores from "../pages/Instrutores"
import Aulas from "../pages/Aulas"
import Financeiro from "../pages/Financeiro"
import Usuarios from "../pages/Usuarios"

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path='/' element={<Home />} />
						<Route path='/alunos' element={<Alunos />} />
						<Route path='/instrutores' element={<Instrutores />} />
						<Route path='/aulas' element={<Aulas />} />
						<Route path='/financeiro' element={<Financeiro />} />
						<Route path='/usuarios' element={<Usuarios />} />
					</Route>
					<Route path='/login' element={<Login />} />
					<Route path='/forgot' element={<Forgot />} />
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	)
}

export default App
