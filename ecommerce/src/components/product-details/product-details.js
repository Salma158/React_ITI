import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

import data from '../../data.json';
import { useParams } from 'react-router-dom';
import './product-details'

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(data.products.find(product => product.id === Number(params.productId)))
  }, [params.productId]); 

  if (!product) {
    return <Typography variant="body1">Product not found</Typography>;
  }

  return (
    <Grid container spacing={2} sx={{ margin: '0 auto', maxWidth: '1500px', }}>
      <Grid item xs={12}>
        <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
        {product.images && product.images.map((img, index) => (
            <Grid item key={index} xs={4}>
              <img src={img} alt={`Product ${index + 1}`} className='smallImages' />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} sx= {{textAlign: 'center'}}>
        <Typography variant="h3">{product.title}</Typography>
        <Typography variant="subtitle1" sx={{marginBottom : '50px'}} >Category: {product.category}</Typography>
      </Grid> 
    </Grid>
  );
};

export default ProductDetails;
