
function Header({ children }) {
	return (
		<header className='grid items-center grid-flow-col justify-between p-2 px-3 md:border-b md:border-slate-100 md:px-6'>
			{children}
		</header>
	)
}

export default Header