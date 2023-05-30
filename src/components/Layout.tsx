const Layout = ({children}: {children: JSX.Element}): JSX.Element => {
    return(
        <>
        <div className="min-h-screen flex flex-col pt-14 items-center bg-gray-300">
            {children}
        </div>
        </>
    )
}
export {Layout}