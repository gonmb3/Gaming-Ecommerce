import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { Container, Row } from "reactstrap";


import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaBars } from "react-icons/fa"

import "./header.css"
import { motion } from "framer-motion"

import useAuth from './../../hooks/useAuth';
import {signOut} from "firebase/auth"
import { auth } from "../../firebase";

import {BiUserCircle} from "react-icons/bi"

const Header = () => {

    {/*Nav links*/ }
    const nav__links = [
        {
            path: "inicio",
            display: "Inicio"
        },
        {
            path: "productos",
            display: "Juegos"
        },
        {
            path: "carrito",
            display: "Carrito"
        },
    ]

    const totalQtity = useSelector(state => state.cart.totalQuantity)
    
    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const { currentUser } = useAuth();
    const navigate = useNavigate()

    const profileActionsRef = useRef(null)


    /*HEADER SCROLL EFFECT*/
    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add("sticky__header")
            } else {
                headerRef.current.classList.remove("sticky__header")
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc();
        return () => window.removeEventListener("scroll", stickyHeaderFunc)
    }, [])

    const logout = () => {
        signOut(auth)
        .then(() => {
            toast.success("Cerrando Sesión...")
            navigate("/home")
        })
        .catch(error => {
            toast.error("Algo Salio Mal...")
            console.log(error);
        })
    }


    /*HEADER MOBILE MENU*/
    const menuToggle = () => menuRef.current.classList.toggle("active__menu")

    const toggleProfileActions = () => profileActionsRef.current.classList.toggle("show__actions")


    return (

        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <Link to="/">
                            <div className="logo">

                             {/*LOGO*/}
                                <div>
                                    <h1><span>G</span>AMING</h1>
                                </div>
                            </div>
                        </Link>
                        
                        {/*NAV MENU*/}
                        <div className="navigation" ref={menuRef} onClick={menuToggle} >   
                            <ul className="menu">
                                {
                                    nav__links.map((link, index) => (
                                        <li key={index}
                                            className="nav__item text-uppercase">
                                            <Link
                                                to={link.path}
                                            >
                                                {link.display}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>                                               {/*NAV ICONS*/}
                        <div className="nav__icons">
                            <Link to="/carrito">
                                <span>
                                    <AiOutlineShoppingCart size={25} />
                                    <span className="badge">{totalQtity}</span>
                                </span>
                            </Link>
                            <span>

                                <div className="profile">

                                <BiUserCircle size={32} color="white"  onClick={toggleProfileActions}  />
                        
                                  <div 
                                  className="profile__actions "
                                 onClick={toggleProfileActions} 
                                  ref={profileActionsRef}>

                                   { currentUser ?
                                 
                                     <span onClick={logout}>Cerrar Sesión</span>
                                          :
                                    <div className="d-flex align-items-center justify-content-center flex-column ">
                                    <Link to="/registrate">Registrate </Link> 
                                    <Link to="/iniciarSesion">Iniciar Sesión</Link>
                                    </div>
                                   
                                  }
                                  </div>
                                </div>

                            </span>
                            
                            {/*MOBILE BARS*/}
                            <div className="mobile__menu">          
                                <span cl onClick={menuToggle}>
                                    <FaBars size={22} />
                                </span>
                            </div>
                        </div>



                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header