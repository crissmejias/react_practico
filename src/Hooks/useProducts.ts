import { useState, useEffect } from 'react'

const useProducts = () => {
    const [products, setProducts] = useState<Array<Product>>([])
    useEffect(()=> {
        async function fetchProducts(){
            const data = await fetch('https://api.escuelajs.co/api/v1/products?offset=10&limit=10')
            const dataToJson = await data.json()
            setProducts(dataToJson);
        }
        fetchProducts();
    },[])
    return(
        products
    )
}
export {useProducts}
