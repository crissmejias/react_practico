import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShopeeCartContext } from "../Context"

const CheckOutItem = ({product}:{product:Product}): JSX.Element => {
    const {removeItemFromCart} = useContext(ShopeeCartContext);
    return(
        <div className='flex h-1/6 items-center gap-2 pr-2 m-4 border-[1px] rounded-lg'>
            <figure className="h-full">
                <img className="h-full" src={product.images[0]} />
            </figure>
            <div className='flex justify-evenly gap-4 w-1/2 mx-auto'>
                <span className="text-lg font-semibold text-red-700 flex"><ShoppingCartIcon height={"25px"}/>{product.count}</span>
                <span>{product.title}</span>
                <span className='font-bold'>${product.price}</span>
            </div>
            <button onClick={()=>{removeItemFromCart(product)}}>
            <XMarkIcon height={"20px"}/>
            </button>
            </div>
    )
}
export{CheckOutItem}