//react hooks
import { useEffect, useState } from 'react';

//components
import Services from '../services/Services';
import Helmet from './../components/Helmet/Helmet';
import Hero from '../components/Hero/Hero';
import Trending from '../components/Trending/Trending';
import OffersCounter from '../components/OffersCounter/OffersCounter';
import BestSales from '../components/BestSales/BestSales';
import NewArrivals from '../components/NewArrivals/NewArrivals';

// data products
import products from ".././assets/data/products"

const Home = () => {


    // filter state products by.
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);


    //filter products by category
    useEffect(() => {
        const filteredTrendingProducts = products.filter(
            item => item.category === "ps5");

        const filteredBestSalesProducts = products.filter(
            item => item.category === "ps4");

        const filteredmobileProducts= products.filter(
            item => item.category === "pc");

        setTrendingProducts(filteredTrendingProducts);
        setBestProducts(filteredBestSalesProducts);
        setMobileProducts(filteredmobileProducts)
    }, []);


    useEffect(() => {
        window.scrollTo(0,0)
      },[])
   
    return (
        <Helmet title={"Inicio"} >
            {/*HERO COMPONENT*/}
            <Hero/>
            {/*SERVICES COMPONENT*/}
            <Services />
             {/*TRENDINGPRODUCTS COMPONENT SECTION-----*/}
             <Trending trendingProducts={trendingProducts} />

             {/*COUNTER COMPONENT SECTION-----*/}
             <OffersCounter/>

              {/*BESTSALES COMPONENT SECTION -----*/}
             <BestSales bestSalesProducts={bestSalesProducts} />

             {/*NEWARRIVALS COMPONENT SECTION -----*/}
            <NewArrivals mobileProducts={mobileProducts} />
        </Helmet>
    )
}

export default Home