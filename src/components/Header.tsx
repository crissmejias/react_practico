import { NavLink } from "react-router-dom"
import {ShoppingBagIcon} from '@heroicons/react/24/solid'
const Header = (): JSX.Element  => {
    return(
        <>
        <header className="w-full py-4 bg-gray-700 flex justify-between ">
            <div className="flex gap-12 ml-4  items-baseline text-white">
            <NavLink to="/"><h1 className="text-2xl">Shopee</h1></NavLink>   
                <nav className="flex gap-4">
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-white" : ""} to="/">All</NavLink>       
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-white" : ""} to="/clothes">Clothes</NavLink>       
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-white" : ""} to="/electronics">Electronics</NavLink>
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-white" : ""} to="/furniture">Furniture</NavLink>
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-white" : ""} to="/toys">Toys</NavLink>
                </nav>
            </div>
            <div className="flex gap-12  items-center mr-12">
                <nav className="flex gap-4 items-baseline text-white">
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-white" : ""} to="/email">crissmejias@gmail.com</NavLink>       
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-white" : ""} to="/my-orders">My orders</NavLink>
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-white" : ""} to="/my-account">My account</NavLink>
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-white" : ""} to="/sign-out">Sign out</NavLink>
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-white relative" : "relative"} to="/checkout">
                        <div className="relative flex flex-col">
                            <ShoppingBagIcon className="h-6 w-6"/>
                            <span className="text-sm bg-red-600/80 rounded-full absolute z-10 -top-1 -right-2 px-1">1</span>
                        </div>
                    </NavLink>
                </nav>
            </div>
        </header>
        </>
    )
}
export {Header}