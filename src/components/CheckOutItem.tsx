import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShopeeCartContext } from "../Context"

const CheckOutItem = ({product}:{product:Product}): JSX.Element => {
    const {removeItemFromCart} = useContext(ShopeeCartContext);
    return(
        <div className='flex h-1/6 m-2 items-center gap-2 rounded-lg'>
            <figure className="h-full">
                <img className="h-full rounded" src={product.images[0]} />
            </figure>
            <div className='flex justify-between w-2/3  gap-2 items-center  mx-auto'>
                <span className="text-lg font-semibold text-red-700 flex"><ShoppingCartIcon height={"25px"}/>{product.count}</span>
                <span className="w-1/3">{product.title}</span>
                <span className='font-bold'>${product.price}</span>
            <button onClick={()=>{removeItemFromCart(product)}}>
            <XMarkIcon height={"20px"}/>
            </button>
            </div>
            </div>
    )
}
export{CheckOutItem}