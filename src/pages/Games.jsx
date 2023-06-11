import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/commonSection/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import {BiSearchAlt} from "react-icons/bi"

import "../styles/games.css"
import products from '../assets/data/products';
import ProductsList from '../components/Products/ProductsList';

const Games = () => {

  const [productsData, setProductsData] = useState(products);

  /*FILTER (--SELECT-) PRODUCTS  */
  const handleFilter = (e) => {
      const filterValue = e.target.value;
      if(filterValue === "sofa"){
        const filteredProducts = products.filter(item => item.category === "ps5");

        setProductsData(filteredProducts)
      };

      if(filterValue === "mobile"){
        const filteredProducts = products.filter(item => item.category === "ps4");

        setProductsData(filteredProducts)
      };
      if(filterValue === "chair"){
        const filteredProducts = products.filter(item => item.category === "xbox");

        setProductsData(filteredProducts)
      };
      if(filterValue === "watch"){
        const filteredProducts = products.filter(item => item.category === "wii");

        setProductsData(filteredProducts)
      };
      if(filterValue === "wireless"){
        const filteredProducts = products.filter(item => item.category === "pc");

        setProductsData(filteredProducts)
      };
      
  }

   /*FILTER (-INPUT SEARCH-) PRODUCTS: */
  const handleSearch = e => {    
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item => item.productName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    setProductsData(searchedProducts)
  }

  


  return (
    <Helmet title={"Productos"}>
      <CommonSection/>      {/* COMMONSECTION COMPONENT */}
      <section>
      <Container>
          <Row>
                <Col lg="8" md="6">             
                <select name="" className="filter__container mb-3" onChange={handleFilter}>
                      <option>Filtrar por Categoria</option>
                      <option value="sofa">Ps5</option>
                      <option value="mobile">Ps4</option>
                      <option value="chair">Xbox</option>
                      <option value="watch">Wii</option>
                      <option value="wireless">Pc</option>
                    </select>                 
                </Col> 


                <Col lg="4" md="12">
                  <div className="search__box">
                    <input type="text" placeholder='Buscar...'  onChange={handleSearch}/>  
                    <span className='p-2'><BiSearchAlt className='search-icon text-white' size={25}/> </span>
                  </div>  
                </Col> 
          </Row>
      </Container>
      </section>

      <section className=''>
        <Container>
          <Row>
            {
              productsData.length === 0 ? <h1 className='text-center nt-found'>No se encontraron productos!</h1>
               : (
                  <ProductsList data={productsData}/>
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Games