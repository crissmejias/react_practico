import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { XMarkIcon, CalendarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShopeeCartContext } from "../Context";
import { Link } from "react-router-dom"

const OrdersCart = ({order}:{order : Order}): JSX.Element => {
    const {removeOrder} = useContext(ShopeeCartContext);
    return(
        <div className="w-1/2 mx-auto rounded-md" key={`${order.id}`}>
            <p className="flex gap-24 items-center justify-center w-full">
                <img src={order.products[0].images[0]} className="w-1/4 rounded-lg"/>
                <div className="flex flex-col gap-4 py-10">
                    <div className="flex gap-2 items-baseline">
                <CalendarIcon height={"20px"}/>
                <span>{`${order.date.split(',')[0]}`}</span>
                    </div>
                    <div className="flex gap-2 items-baseline">
                <ShoppingCartIcon height={"20px"} />
                <span>{order.products.length}</span>
                    </div>
                <span className="font-semibold text-2xl">${order.total}</span>
                </div>
                <div className="flex flex-col gap-12">
                <Link to={`${order.id}`} className="cursor-pointer" >
                <ArrowUturnLeftIcon height={"18px"}/>
                </Link>
                <XMarkIcon onClick={()=>{removeOrder(order.id)}} className="cursor-pointer" height={"24px"}/>
                </div>
            </p>
        </div>
    )

}
export {OrdersCart}