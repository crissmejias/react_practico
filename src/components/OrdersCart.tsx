import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShopeeCartContext } from "../Context";
import { Link } from "react-router-dom"

const OrdersCart = ({order}:{order : Order}): JSX.Element => {
    const {removeOrder} = useContext(ShopeeCartContext);
    return(
        <div className="w-full mx-auto" key={`${order.id}`}>
            <p className="grid grid-cols-5 place-items-center py-4">
                <span>Date: {`${order.date.split(',')[0]}`}</span>
                <span>Total Products: {order.products.length}</span>
                <span className="">Price: ${order.total}</span>
                <Link to={`${order.id}`} >
                <ArrowUturnLeftIcon height={"18px"}/>
                </Link>
                <XMarkIcon onClick={()=>{removeOrder(order.id)}} height={"24px"}/>
            </p>
        </div>
    )

}
export {OrdersCart}