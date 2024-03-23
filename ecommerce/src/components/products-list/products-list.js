import React, { useState, useEffect } from 'react';
import ProductItem from './../productCard'
import { Grid , Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../store/productSlice'

const ProductList = () => {

  const dispatch = useDispatch();
  const { data: products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  if (loading) {
    return <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div>;
  }

  if (error) {
    return <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div>;
  }


  if(products.products)
  {

  return (
    <>
    <Typography variant="h4" gutterBottom align="center" sx={{marginTop: '100px'}}>
         Products List
    </Typography>
    <Grid container spacing={4}  sx={{ margin: '0 auto', maxWidth: '1500px', }}>
      {products.products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Grid>
    </>
  );
      }
};

export default ProductList;

