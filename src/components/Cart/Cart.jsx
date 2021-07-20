import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import emptycart from '../images/emptycart.svg';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const handleEmptyCart = () => onEmptyCart();
  const classes = useStyles();

  const renderEmptyCart = () => (
    <>
      <h5 className='card shadow p-3 w-75'>
        You have No items in Your Shopping Cart <br />
        <Link to='/'>Start Adding Some</Link>
      </h5>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img src={emptycart} alt='empty' width='400px' height='400px' />
      </div>
    </>
  );

  if (!cart.line_items)
    return (
      <div className='container d-flex'>
        <h2 className='me-3'>Please Wait...</h2>
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map(lineItem => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4'>
          Total Price: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size='large'
            type='button'
            variant='contained'
            color='secondary'
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to='/checkout'
            size='large'
            type='button'
            variant='contained'
            color='primary'
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <div className='container mt-5'>
      <h2>Your Shopping Cart</h2>
      <div className='minidivider'></div>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
      <div className='divider'></div>
    </div>
  );
};

export default Cart;
