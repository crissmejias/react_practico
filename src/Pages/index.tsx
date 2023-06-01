import {Route, Routes} from 'react-router-dom'
import {Layout} from "../Components/Layout"
import { Header } from '../Components/Header'
import { Home } from './Home'
import { MyAccount } from './MyAccount'
import { MyOrders } from './MyOrders'
import { MyOrder } from './MyOrder'
import { SignIn } from './SignIn'
import { NotFound } from './NotFound'
function App() {
    return(
    <>
    <Header/>
    <Layout>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/clothes" element={<h1>Clothes</h1>}/>
        <Route path="/electronics" element={<h1>Electronics</h1>}/>
        <Route path="/furniture" element={<h1>Furniture</h1>}/>
        <Route path="/toys" element={<h1>Toys</h1>}/>
        <Route path="/others" element={<div>Others</div>}/>
        <Route path="/my-account" element={<MyAccount/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/my-orders" element={<MyOrders/>}/>
        <Route path="/my-orders/last" element={<MyOrder/>}/>
        <Route path="/checkout" element={<h1>Checkout</h1>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App
