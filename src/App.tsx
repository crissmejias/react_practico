import {Route, Routes} from 'react-router-dom'
import {Layout} from "./components/Layout"
import { Header } from './components/Header'
function App() {
    return(
    <>
    <Header/>
    <Layout>
      <Routes>
        <Route path="/"  element={<h1>Home</h1>}/>
        <Route path="/clothes" element={<h1>Clothes</h1>}/>
        <Route path="/electronics" element={<h1>Electronics</h1>}/>
        <Route path="/furniture" element={<h1>Furniture</h1>}/>
        <Route path="/toys" element={<h1>Toys</h1>}/>
        <Route path="/my-account" element={<h1>My Account</h1>}/>
        <Route path="/my-orders" element={<h1>My Orders</h1>}/>
        <Route path="/checkout" element={<h1>Checkout</h1>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App
