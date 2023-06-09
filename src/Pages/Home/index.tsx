import { useContext } from "react";
import { ShopeeCartContext } from "../../Context";
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail";
import { useProducts } from "../../Hooks/useProducts"
import { CheckOutMenu } from "../../Components/CheckOutMenu";
const Home = (): JSX.Element => {
    const products = useProducts();
    const {detailStatus, checkOutStatus} = useContext(ShopeeCartContext);
    return( 
            <>  
            <h1 className="text-5xl mb-10">All Products</h1>
            <main className="flex gap-6 flex-wrap justify-center">
            {products.map(product => <Card key={product.id} product={product}/>)}
            </main>
            {
            detailStatus && 
            <ProductDetail/>
            }
            {checkOutStatus &&
                <CheckOutMenu/>
            }
            </>
    )
}
export {Home}