import { Link, NavLink, useNavigate } from 'react-router-dom'
import { TbAlbum, TbBook2, TbCar, TbCoin, TbCurrencyReal, TbHome, TbLogout, TbMotorbike, TbSchool, TbUsers } from 'react-icons/tb'
import { useRecoilState } from 'recoil'
import { UserState } from '../services/store'
import useSession from '../hooks/useSession'

function MenuItem({ label, element: Component, children, ...rest }){
    const props = {
        size: 20, strokeWidth: 1.5
    }
    return <NavLink className='grid items-center justify-center md:grid-cols-[24px_1fr] md:items-center md:px-4 md:py-1 md:rounded md:mb-2' {...rest}>
            <Component className="w-8 h-8 stroke-[1.5] md:w-5 md:h-5"/>
            <span className='hidden md:block md:mx-2'>{label}</span>
        </NavLink>
}

function Menu() {
    const [user, setUser] = useRecoilState(UserState)
    const { signOut } = useSession()
    async function handleSair(){
        await signOut()
    }
    return (
        <nav className='grid grid-flow-col md:flex md:flex-col md:px-4'>
            <MenuItem to='/' label='Home' element={TbHome} />
            {user.tipo == "admin" && <MenuItem to='/instrutores' label='Instrutores' element={TbAlbum} />}
            {user.tipo == "admin" && <MenuItem to='/alunos' label='Alunos' element={TbSchool} />}
            {user.tipo == "admin" && <MenuItem to='/aulas' label='Aulas' element={TbBook2} />}
            {user.tipo == "admin" && <MenuItem to='/financeiro' label='Financeiro' element={TbCoin} />}
            {user.tipo == "admin" && <MenuItem to='/usuarios' label='Usuarios' element={TbUsers} />}
            <Link onClick={handleSair}>Sair</Link>
        </nav>
    )
}

export default Menu