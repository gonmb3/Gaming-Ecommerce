import React from 'react'
import Helmet from './../components/Helmet/Helmet';
import CommonSection from './../components/commonSection/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import {BsTrash} from "react-icons/bs"

import { useDispatch, useSelector } from 'react-redux';
import {deleteItem} from "../redux/slices/cartSlice"
import { Link } from 'react-router-dom';

import "../styles/cart.css"

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount)



  return (

    
    <Helmet title={"Carrito"} >
          <CommonSection/>  {/*COMMONSECTION COMPONENT----*/}

          <Container className='my-5 py-5'>
            <Row>
                <Col lg="9" className=' ' >

                        {
                          cartItems.length === 0 ? <h2 className='text-center fw-bold text-white py-5'> No hay Productos en tu Carrito </h2> 
                          : (
                             <table className="table bordered text-white">
                        <thead>
                            <tr>
                              <th>Imagen</th>
                              <th>Titulo</th>
                              <th>Precio</th>
                              <th>Cantidad</th>
                              <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                          cartItems.map((item) => (
                           <tr key={item.id}>
                            <td><img src={item.imgUrl} alt="img-procudt" /> </td>
                            <td>{item.productName} </td>
                            <td>${item.price}.00 </td>
                            <td>{item.quantity} </td>
                            <td><span onClick={()=> dispatch(deleteItem(item.id)) } ><BsTrash size={20}/>  </span></td>
                          </tr>
                          ))
                        }
                        </tbody>
                    </table>
                          )
                        }

              
                   
                </Col>

                <Col lg="3">
                        <div className="">
                           <h5 className='d-flex align-items-center justify-content-between text-white'>
                                Subtotal
                                <span className='fw-4 fw-bold'>${totalAmount}.00 </span>
                           </h5>
                          
                           <div className="">
                          <Link to ="/productos">  
                           <button className='buy_btn w-100 mt-3'>
                            Continuar Comprando
                           </button>
                          </Link>
                          <Link to ="/checkout">
                           <button className='buy_btn w-100'>
                            Comprar
                           </button>
                           </Link>
                           </div>
                        </div>
                  </Col>
            </Row>
          </Container>
    </Helmet>
  )
}

export default Cart