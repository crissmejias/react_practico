import { useContext } from "react"
import { ShopeeCartContext } from "../../Context"
import { CheckOutItem } from "../../Components/CheckOutItem"
const MyOrder = ():JSX.Element => {
    const {orders} = useContext(ShopeeCartContext)
    return(
        <>
        <div className="w-full flex flex-col items-center gap-4">
        <h1 className="text-4xl">My Order</h1>
        <div className="flex flex-col h-[90vh] w-8/12 min-w-fit ">
            {orders?.slice(-1)[0].products.map(product => <CheckOutItem key={product.id} product={product}/>)}
        </div>
        </div>
        </>
    )
}
export {MyOrder}