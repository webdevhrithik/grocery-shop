import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 200,
    width: '300px'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cartActions: {
    justifyContent: 'space-between'
  },
  buttons: {
    display: 'flex',
    alignItems: 'center'
  }
}));
