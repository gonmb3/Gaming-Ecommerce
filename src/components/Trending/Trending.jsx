import { Container, Row, Col } from "reactstrap"
import ProductsList from "../Products/ProductsList"

import "./trending.css"


const Trending = ({trendingProducts}) => {
  return (
    <section className="trending__products">  
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2 className='section__title'>
                                Tendencias
                            </h2>
                        </Col>
                        {/*PRODUCTLIST COMPONENT-----*/}
                        <ProductsList data={trendingProducts} />
                    </Row>

                </Container>
            </section>
  )
}

export default Trending