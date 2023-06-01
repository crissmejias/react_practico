import {XCircleIcon} from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShopeeCartContext } from '../Context';
import { CheckOutItem } from './CheckOutItem';
import { useNavigate } from 'react-router-dom';
const CheckOutMenu = (): React.ReactNode => {
    const {getTotalPrice,productsCart, openCheckOut, createNewOrder} = useContext(ShopeeCartContext);
    const totalPrice = getTotalPrice();
    const navigate = useNavigate();
    const handleCheckOut = () => {
        const date = new Date().toLocaleString()
        createNewOrder({date,total: totalPrice, products: productsCart})
        navigate('/my-orders/last')
    }
    return(
        <aside className="overflow-scroll w-[460px] h-[70vh] flex flex-col fixed top-[68px] right-2 bg-white border-[1px] border-black rounded-lg">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                
                <button onClick={openCheckOut}>
                    <XCircleIcon className='h-8 w-8 rounded-full'/>
                </button>
            </div>
            {productsCart.map(product => <CheckOutItem key={product.id} product={product}/>)}
            <div className='w-full flex flex-col justify-end' >
            <div className='flex justify-between items-baseline py-8 px-24 w-full'>
                <span className='font-medium text-2xl'>Total:</span>
                <span className='font-semibold text-2xl'>${totalPrice}</span>
            </div>
                <button onClick={handleCheckOut} className='w-2/3 mx-auto mb-4 py-2 rounded-lg bg-gray-700 text-white'>Check Out</button>
            </div>
        </aside>
    )
}
export {CheckOutMenu};