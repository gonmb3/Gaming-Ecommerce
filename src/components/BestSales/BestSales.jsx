import { Container, Row, Col } from "reactstrap"
import ProductsList from "../Products/ProductsList"


const BestSales = ({bestSalesProducts}) => {
  return (
    <section className="">      
    <Container>
        <Row>
            <Col lg="12" className='text-center'>
                <h2 className='section__title'>
                    Lo más vendido
                </h2>
            </Col>
            {/*PRODUCTLIST COMPONENT-----*/}
            <ProductsList data={bestSalesProducts} />
        </Row>

    </Container>
</section>
  )
}

export default BestSales