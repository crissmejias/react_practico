const Layout = ({children}: {children: JSX.Element}): JSX.Element => {
    return(
        <>
        <div className="min-h-screen flex flex-col bg-gray-500">
            {children}
        </div>
        </>
    )
}
export {Layout}