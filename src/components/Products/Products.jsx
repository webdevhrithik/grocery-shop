import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length)
    return (
      <div className='container'>
        <h3>Loading...</h3>
      </div>
    );

  return (
    <main className='container'>
      <div className={classes.toolbar} />
      <Grid container justifyContent='center' spacing={4}>
        {products.map(product => (
          <Grid key={product.id} item xs={11} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
