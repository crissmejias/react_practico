import { createContext, useState } from "react";
interface CartContext {
    //Counter for the cart icon
    count: number,
    increaseCounter(): void,
    // Detail Modal Info
    detailStatus: boolean,
    productInfo: Product,
    openProductDetail(product : Product):void
    closeProductDetail():void,
    // Shopping Cart Products
    productsCart:Product[],
    addToCart(product:Product):void,
    // Modal Cart Info
    checkOutStatus:boolean,
    openCheckOut():void
}
const ShopeeCartContext = createContext<CartContext>({} as CartContext);
const ShopeeCartProvider = ({children}:{children : React.ReactNode}) => {
    const [count, setCount] = useState<number>(0);
    const [detailStatus, setDetailStatus] = useState<boolean>(false);
    const [productInfo, setProductInfo] = useState<Product>({} as Product);
    const [productsCart, setProductsCart] = useState<Product[]>([] as Product[]);
    const [checkOutStatus, setCheckOutStatus] = useState<boolean>(false);
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
    const addToCart = (product:Product) => {    
            const productAlreadyInCart = productsCart.find(item => item.id === product.id);
            const filteredProducts = productsCart.filter(item => item.id !== product.id);
            if(productAlreadyInCart){
                const copyOfProduct = {...productAlreadyInCart};
                copyOfProduct.count += 1
                setProductsCart(()=>[copyOfProduct, ...filteredProducts])
            }
            else{
                const copyOfProduct = {...product};
                copyOfProduct.count = 1;
                setProductsCart(prev => [...prev,copyOfProduct])
            }
            increaseCounter();
    }
    const openCheckOut = () => {
        setCheckOutStatus(prev => !prev)
    }
    return(
        <ShopeeCartContext.Provider 
        value={{count, increaseCounter, detailStatus, closeProductDetail,productInfo, openProductDetail,productsCart, addToCart,checkOutStatus, openCheckOut}}>
            {children}
        </ShopeeCartContext.Provider>
    )
}
export {ShopeeCartContext, ShopeeCartProvider};