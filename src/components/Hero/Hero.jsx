import { Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

import "./hero.css"

const Hero = () => {

    const year = new Date().getFullYear();
    
  return (
    <section className="hero__section">
    <Container>
        <Row>
            <Col lg="6" md="6">
                <div className="hero__content">
                    <p className="hero__subtitle fw-bolder text-uppercase fs-4 ">
                        Juegos Tendencia {year}
                    </p>
                    <h2 className='shadow-lg'>LOS ULTIMOS JUEGOS DE TU CONSOLA FAVORITA!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Natus quasi aliquam quo
                        temporibus corrupti accusantium ea quis vel
                        iste dolores.
                    </p>
                    <Link to="/productos">
                        <button className="buy__btn">Comprar Ahora</button>
                    </Link>
                </div>
            </Col>
        </Row>
    </Container>
</section>
  )
}

export default Hero