import { NavLink } from "react-router-dom"
import {ShoppingBagIcon} from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShopeeCartContext } from "../Context"
const Header = (): JSX.Element  => {
    const {count, openCheckOut} = useContext(ShopeeCartContext);
    return(
        <>
        <header className="w-full py-4 bg-gray-300 flex justify-between ">
            <div className="flex gap-12 ml-4  items-baseline text-black">
            <NavLink to="/"><h1 className="text-2xl">Shopee</h1></NavLink>   
                <nav className="flex gap-4">
                    <NavLink className={({isActive}: {isActive: boolean}) => isActive ? "border-b-2 border-black" : ""} to="/">All</NavLink>       
                    <NavLink className={({isActive}: {isActive: boolean}) => isActive ? "border-b-2 border-black" : ""} to="/clothes">Clothes</NavLink>       
                    <NavLink className={({isActive}: {isActive: boolean}) => isActive ? "border-b-2 border-black" : ""} to="/electronics">Electronics</NavLink>
                    <NavLink className={({isActive}: {isActive: boolean}) => isActive ? "border-b-2 border-black" : ""} to="/furniture">Furniture</NavLink>
                    <NavLink className={({isActive}: {isActive: boolean}) => isActive ? "border-b-2 border-black" : ""} to="/toys">Toys</NavLink>
                    <NavLink className={({isActive}: {isActive: boolean}) => isActive ? "border-b-2 border-black" : ""} to="/others">Others</NavLink>
                </nav>
            </div>
            <div className="flex gap-12  items-center mr-12">
                <nav className="flex gap-4 items-baseline text-black">
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-black" : ""} to="/signin">Sign In</NavLink>       
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-black" : ""} to="/my-orders">My orders</NavLink>
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-black" : ""} to="/my-account">My account</NavLink>
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-black" : ""} to="/sign-out">Sign out</NavLink>
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-black relative" : "relative"} to='/' onClick={openCheckOut}>
                        <div className="relative flex flex-col">
                            <ShoppingBagIcon className="h-6 w-6"/>
                            <span className="text-sm text-white bg-red-600/80 rounded-full absolute z-10 -top-1 -right-4 px-2">{count}</span>
                        </div>
                    </NavLink>
                </nav>
            </div>
        </header>
        </>
    )
}
export {Header}