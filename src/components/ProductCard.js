import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

function ProductCard({ item, cart, setCart }) {
  const handleAddItem = () => {
    const itemExists = cart.find((p) => p.id === item.id);

    if (itemExists) {
      const newCart = cart.map((p) =>
        p.id === item.id ? { ...itemExists, qty: itemExists.qty + 1 } : p
      );

      setCart(newCart);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  return (
    <div className='card'>
      <Card sx={{width: 250}}>
        <CardMedia className="card-media" component='img' height='200' src={item.img} alt='clothing' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {item.name}
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            One Size fits all
            
          </Typography>
          <h3>Price: {item.price}$</h3>
        </CardContent>
        <CardActions>
          <Button onClick={handleAddItem} size='small' color='primary'>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductCard;
