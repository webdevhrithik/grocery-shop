import { FaShoppingCart } from 'react-icons/fa';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from '@material-ui/core';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className='card  shadow h-100'>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent className='h-75'>
        <div>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.name}
          </Typography>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant='body2'
          color='textSecondary'
          component='p'
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart' onClick={handleAddToCart}>
          <button
            className='btn btn-primary d-block w-100'
            style={{ marginTop: '-3.5rem', backgroundColor: '#27ae60' }}
          >
            Add to Cart <FaShoppingCart />
          </button>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
