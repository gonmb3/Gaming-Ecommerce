import { Container, Row, Col } from "reactstrap"
import ProductsList from "../Products/ProductsList"



const NewArrivals = ({mobileProducts}) => {
  return (
    <section className="new__arrivals">
    <Container>
        <Row>
            <Col lg="12" className='text-center'>
                <h2 className='section__title'>
                    Nuevos Arribos
                </h2>
            </Col>
            {/*PRODUCTLIST COMPONENT-----*/}
            <ProductsList data={mobileProducts} />
        </Row>
    </Container>
</section>
  )
}

export default NewArrivals