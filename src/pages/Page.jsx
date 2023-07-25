import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"
import Title from "../components/Title"

function Page() {
	return (
		<div className="h-screen grid grid-cols-1 grid-rows-[50px_1fr_50px] md:grid-cols-[200px_1fr] md:grid-rows-[100px_1fr]">
			<Title />
			<Outlet />
			<Menu />
		</div>
	)
}

export default Page

/*
import { TbAlbum, TbBook2, TbCar, TbCoin, TbCurrencyReal, TbHome, TbLogout, TbMotorbike, TbSchool, TbUsers } from 'react-icons/tb'

function Footer(){
	const props = { size: 32, strokeWidth: 1.6 }
	return (
		<div className='flex justify-between py-4 md:block lg:block'>
			<TbHome {...props} />
			<TbUsers {...props} />
			<TbAlbum {...props} />
			<TbBook2 {...props} />
			<TbCar {...props} />
			<TbCurrencyReal {...props} />
			<TbMotorbike {...props} />
			<TbSchool {...props} />
			<TbLogout {...props} />
			<TbCoin {...props} />
		</div>
	)
}

import { TbAlbum, TbBook2, TbCar, TbCurrencyReal, TbHome, TbLogout, TbMotorbike, TbSchool, TbUsers } from 'react-icons/tb'

function Footer(){
	const props = { size: 32, strokeWidth: 1.6 }
	return (
		<div className='flex justify-between py-4 md:block lg:block'>
			<TbHome {...props} />
			<TbUsers {...props} />
			<TbAlbum {...props} />
			<TbBook2 {...props} />
			<TbCar {...props} />
			<TbCurrencyReal {...props} />
			<TbMotorbike {...props} />
			<TbSchool {...props} />
			<TbLogout {...props} />
		</div>
	)
}

*/