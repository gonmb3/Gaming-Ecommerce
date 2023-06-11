import Clock from "../Clock/Clock"

import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap"

import imgPromo from "../../assets/img/promo_img1.png"

import {motion} from "framer-motion";

import "./offersCounter.css"

const OffersCounter = () => {
  return (
    <section className="timer__count position-relative bg-mario">     
    <Container>
        <Row>
            <Col lg="6" md="6">
                <div className="clock__top-content px-3 ">
                    <h4 className=' fs-10 mb-2 text-white fw-bold'>Ofertas Limitadas</h4>
                    <h3 className='text-white fw-bold fs-2 mb-3'>NO TE LAS PIERDAS!</h3>
                    {/* CLOCK COMPONENT ---- */}
                    <Clock />
                    <motion.button whileHover={{ scale: 1.1 }} className="store__btn bg-black">
                        <Link to="/productos">Ver Tienda</Link>
                 </motion.button>
                </div>
            </Col>

            <Col lg="6" md="6" className='text-end '>
                <img className='img-clock' src={imgPromo} alt="img-counter" />
            </Col>
        </Row>
    </Container>
</section>
  )
}

export default OffersCounter