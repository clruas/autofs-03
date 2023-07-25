function Layout({ children }) {
  //row-span-2 grid grid-rows-[100px_1fr]
  return (
    <div className="bg-slate-100 grid grid-rows-[80px_1fr] md:row-span-2 md:border-l border-slate-100">{children}</div>
  )
}
export default Layout