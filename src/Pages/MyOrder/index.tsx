import { useContext } from "react"
import { ShopeeCartContext } from "../../Context"
import { CheckOutItem } from "../../Components/CheckOutItem"
import { Link, useParams } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
const MyOrder = ():JSX.Element => {
    const {orders} = useContext(ShopeeCartContext);
    const {id} = useParams();
    const selectedOrder = orders.find(order => order.id === id);
    if(selectedOrder){
        return(
            <>
            <div className="w-full flex flex-col items-center gap-4">
            <div className="flex relative justify-center w-1/4 items-center">
                <Link to={"/my-orders"}>
                <ChevronLeftIcon className="absolute left-0" height={"24px"}/>
                </Link>
                <h1 className="text-2xl">My Order</h1>
            </div>
        <div className="flex flex-col h-[90vh] w-8/12 min-w-fit ">
            {selectedOrder.products.map(product => <CheckOutItem key={product.id} product={product}/>)}
        </div>
        </div>
        </>)
            }
            else{
             return(
                    <>
                    <div className="w-full flex flex-col items-center gap-4">
            <div className="flex relative justify-center w-1/4 items-center">
                <Link to={"/my-orders"}>
                <ChevronLeftIcon className="absolute left-0" height={"24px"}/>
                </Link>
                <h1 className="text-2xl">My Order</h1>
            </div>
        <div className="flex flex-col h-[90vh] w-8/12 min-w-fit ">
            {orders?.slice(-1)[0].products.map(product => <CheckOutItem key={product.id} product={product}/>)}
        </div>
        </div>
        </>
    )
}
}
export {MyOrder}