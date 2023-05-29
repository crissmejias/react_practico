import { createContext, useState } from "react";
interface CartContext {
    count: number,
    increaseCounter(): void,
    detailStatus: boolean,
    productInfo: Product,
    openProductDetail(product : Product):void
    closeProductDetail():void
}
const ShopeeCartContext = createContext<CartContext>({} as CartContext);
const ShopeeCartProvider = ({children}:{children : React.ReactNode}) => {
    const [count, setCount] = useState<number>(0);
    const [detailStatus, setDetailStatus] = useState<boolean>(false);
    const [productInfo, setProductInfo] = useState<Product>({} as Product);
    const increaseCounter = () => {
        setCount(prev => prev +=1)
    }
    const openProductDetail = (product:Product) => {
        setProductInfo(product)
        setDetailStatus(true)
    }
    const closeProductDetail = () => {
        setDetailStatus(false)
    }
    return(
        <ShopeeCartContext.Provider 
        value={{count, increaseCounter, detailStatus, closeProductDetail,productInfo, openProductDetail}}>
            {children}
        </ShopeeCartContext.Provider>
    )
}
export {ShopeeCartContext, ShopeeCartProvider};