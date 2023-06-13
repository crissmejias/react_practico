import { useContext } from "react"
import { OrdersCart } from "../../Components/OrdersCart"
import { ShopeeCartContext } from "../../Context"
const MyOrders = () : JSX.Element => {
    const {orders} = useContext(ShopeeCartContext);
    return (
        <>
        <h1 className="text-4xl">My Orders</h1>
        <div className="w-10/12 mt-12 mx-auto">
        {orders.map(order => 
        <OrdersCart order={order}/>
        )}
        </div>
        </>
    )
}
export {MyOrders}