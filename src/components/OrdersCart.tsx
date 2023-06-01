import { XMarkIcon } from "@heroicons/react/24/solid";
const OrdersCart = (): JSX.Element => {
    const date = new Date().toLocaleDateString();
    return(
        <div className="w-full">
            <p className="flex justify-evenly">
                <span>Date: {date}</span>
                <span>Products</span>
                <span>Price</span>
                <XMarkIcon height={"24px"}/>
            </p>
        </div>
    )

}
export {OrdersCart}