import { ShoppingCartIcon } from "@heroicons/react/24/solid"

const CheckOutItem = ({product}:{product:Product}): JSX.Element => {
    return(
        <div className='flex flex-col justify-start gap-4 m-4 border-[1px] rounded-lg'>
            <figure>
                <img src={product.images[0]} />
            </figure>
            <div className='flex justify-evenly gap-4'>
                <span className="text-lg font-semibold text-red-700 flex"><ShoppingCartIcon height={"25px"}/>{product.count}</span>
                <span>{product.title}</span>
                <span className='font-bold'>${product.price}</span>
            </div>
            </div>
    )
}
export{CheckOutItem}