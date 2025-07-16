import { Grid} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import SkeletonComponent from "../components/SkeletonComponent";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { supabase } from "../Api/supabaseClient";

function ProductsDetails() {
   
    const { id } = useParams();
    const getProductList=async()=>{
      const { data, error } = await supabase
          .from('products')
          .select('*');
      if (error) throw error;
      return { data };
    }
      const { data,isLoading }=useQuery({
          queryKey: ['products'],
          queryFn: getProductList,
        })  
      useEffect(()=>{
        document.title=`products store | product ${id} page`
      },[])
        if (isLoading)
          return (
            <Grid
              mt='100px'
              minW="100vw"
              align="center"
              justify="center"
            >
                <SkeletonComponent />
            
            </Grid>
          );
          const product = data.data.find((product) => product.id === parseInt(id));
          
        return (
          <Grid
          margin={-30}
          templateColumns={{
            base: "1fr",         // 1 column on mobile
            sm: "repeat(2, 1fr)",// 2 columns on small screens
            md: "repeat(2, 1fr)",// 2 columns on medium screens
            lg: "repeat(3, 1fr)" // 3 columns on large screens and up
          }}
          gap={6}
        >
          {product ? (
            <ProductDetailsCard key={product} attributes={product} />
          ) : (
            <div>Product not found!</div>
          )}
        </Grid>
        );
}

export default ProductsDetails