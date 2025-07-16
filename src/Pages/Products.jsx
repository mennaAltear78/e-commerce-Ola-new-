import { Grid} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useQuery } from "@tanstack/react-query";

import SkeletonComponent from "../components/SkeletonComponent";
import { supabase } from "../Api/supabaseClient";
function ProductsList() {
useEffect(()=>{
  document.title="Products"
},[])
// const getProductList=async()=>{
//     const {data}=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/products?populate=thumbnail`)
    
//     return data
// }
const getProductList=async()=>{
  const { data, error } = await supabase
      .from('products')
      .select('*');
  if (error) throw error;
  return { data };
}


const { data, error, isLoading }=useQuery({
    queryKey: ['products'],
    queryFn: getProductList,
  })
  console.log(data);
  if (isLoading)
    return (
      <Grid
        margin={30}
        templateColumns={"repeat(auto-fill ,minmax(300px ,1fr))"}
        gap={6}
      >
        {Array.from({ length: 20 }, (_, idx) => (
          <SkeletonComponent key={idx} />
        ))}
      </Grid>
    );

  return (
    <Grid  
      margin={30}
      templateColumns={"repeat(auto-fill ,minmax(300px ,1fr))"}
      gap={6} 
      mb={120}
    >
     {data?.data?.map((product,inedx) => (
        <Product  key={product.id} attributes={data.data[inedx]} />
      ))}
    </Grid>
  );
}

export default ProductsList;
