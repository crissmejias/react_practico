import { OrdersCart } from "../../Components/OrdersCart"
const MyOrders = () : JSX.Element => {
    return (
        <>
        <h1 className="text-4xl">My Orders</h1>
        <div className="w-10/12 mt-12 mx-auto">
        <OrdersCart/>
        </div>
        </>
    )
}
export {MyOrders}