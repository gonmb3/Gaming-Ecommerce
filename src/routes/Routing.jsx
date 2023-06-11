import {Route, Routes, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import ProductDetails from './../pages/ProductDetails';
import Cart from './../pages/Cart';
import Login from './../pages/Login';
import Signup from './../pages/Signup';
import Checkout from './../pages/Checkout';
import ProtectedRoute from "./ProtectedRoute";
import Games from "../pages/games";

const Routing = () => {
  return (
    <>
    <Routes>
            <Route path="/" element={<Navigate to ="inicio"/>} />
            <Route path="inicio" element={<Home/>}/>
            <Route path="/productos" element={<Games/>} />
            <Route path="/productos/:id" element={<ProductDetails/>} />
            <Route path="/carrito" element={<Cart/>} />

            <Route path="/checkout"
                   element={ <ProtectedRoute>
                                <Checkout/>
                            </ProtectedRoute> } />

            <Route path="/iniciarSesion" element={<Login/>} />
            <Route path="/registrate" element={<Signup/>} />           
    </Routes>     
    </>
  )
}

export default Routing