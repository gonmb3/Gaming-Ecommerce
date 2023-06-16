import { useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({data}) => {

  //scroll top 0
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
   
  return (
    <>
        {
            data?.map((item, index) => (
                <ProductCard item={item} key={index} />
            ))
        }
    </>
  )
}

export default ProductsList