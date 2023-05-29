import { useContext } from "react";
import { ShopeeCartContext } from "../Context";
import {PlusCircleIcon} from '@heroicons/react/24/outline'
const Card = ({product} : {product : Product}):JSX.Element => {
    const {increaseCounter, openProductDetail} = useContext(ShopeeCartContext)
    return(
        <article 
            className="bg-white cursor-pointer w-1/3 lg:w-1/4 h-80 rounded-lg hover:shadow-lg hover:-translate-y-2 transition-transform" 
            onClick={()=>{openProductDetail(product)}}>
            <figure className="relative mb-2 w-full h-4/5">
                <button className="absolute w-6 h-6 top-0 right-0 m-2 text-center rounded-full" onClick={increaseCounter}><PlusCircleIcon className="h-full w-full bg-white rounded-full"/></button>
                <span className="absolute bottom-0 left-2 bg-red-300/80 rounded-md m-2 p-1">{product.category.name}</span>
                <img className='rounded-lg w-full h-full object-cover' src={product.images[0]} alt="imagen de producto" />
            </figure>
            <p className='flex justify-evenly w-full items-baseline gap-5'>
                <span className='font-light text-gray-500 pb-2 pl-2'>{product.title}</span>
                <span className='font-bold pr-2 pb-4'>${product.price}</span>
            </p>
        </article>
    )
}
export {Card}