import {XCircleIcon} from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShopeeCartContext } from '../Context';
const ProductDetail = ():JSX.Element => {
    const {productInfo,closeProductDetail} = useContext(ShopeeCartContext)
    console.log(productInfo)
    return(
        <aside className="w-[360px] h-[80vh] flex flex-col fixed top-[68px] right-2 bg-white border-[1px] border-black rounded-lg">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <button onClick={closeProductDetail}>
                    <XCircleIcon className='h-8 w-8 rounded-full'/>
                </button>
            </div>
            <div className='flex flex-col justify-start gap-4 '>
            <figure>
                <img src={productInfo.images[0]} alt="" />
            </figure>
            <div className='flex justify-between px-8'>
                <span className=''>{productInfo.title}</span>
                <span className='font-bold'>${productInfo.price}</span>
            </div>
            <p className='px-8'>{productInfo.description}</p>
            </div>
        </aside>
    )
}
export {ProductDetail}