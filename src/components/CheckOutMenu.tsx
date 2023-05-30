import {XCircleIcon} from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShopeeCartContext } from '../Context';
import { CheckOutItem } from './CheckOutItem';
const CheckOutMenu = (): React.ReactNode => {
    const {getTotalPrice,productsCart, openCheckOut, clearProductsCart} = useContext(ShopeeCartContext);
    const totalPrice = getTotalPrice();
    return(
        <aside className="overflow-scroll w-[560px] h-[80vh] flex flex-col fixed top-[68px] right-2 bg-white border-[1px] border-black rounded-lg">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                
                <button onClick={openCheckOut}>
                    <XCircleIcon className='h-8 w-8 rounded-full'/>
                </button>
            </div>
            {productsCart.map(product => <CheckOutItem key={product.id} product={product}/>)}
            <div className='flex justify-evenly items-baseline p-8 w-full'>
                <span className='font-semibold text-2xl'>Total: ${totalPrice} </span>
                <button onClick={clearProductsCart} className='px-6 py-2 rounded-lg bg-gray-700 text-white'>Crear Orden</button>
            </div>
        </aside>
    )
}
export {CheckOutMenu};