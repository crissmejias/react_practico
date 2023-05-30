import {XCircleIcon} from '@heroicons/react/24/outline';

const CheckOutMenu = (): JSX.Element => {
    return(
        <aside className="w-[360px] h-[80vh] flex flex-col fixed top-[68px] right-2 bg-white border-[1px] border-black rounded-lg">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <button>
                    <XCircleIcon className='h-8 w-8 rounded-full'/>
                </button>
            </div>
            <div className='flex flex-col justify-start gap-4 '>
            <figure>
                <img/>
            </figure>
            <div className='flex justify-between px-8'>
                <span></span>
                <span className='font-bold'></span>
            </div>
            <p className='px-8'></p>
            </div>
        </aside>
    )
}
export {CheckOutMenu};