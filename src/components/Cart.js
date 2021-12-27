import React, { useState } from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Cart({ cart, setCart }) {
  const [open, setOpen] = useState(false);

  const getTotalAmount = () => {
    let sum = 0;
    if (cart.length === 0) return;
    cart.forEach((product) => (sum += product.price * product.qty));
    return sum;
  };

  const handleRemoveAll = (e) => {
    e.preventDefault();
    setCart([]);
  };

  const handleRemoveItem = (i) => {
    const newCart = [...cart];
    newCart.splice(i, 1);

    setCart(newCart);
  };

  const handleIncrease = (i) => {
    const newCart = [...cart];
    newCart[i].qty += 1;

    setCart(newCart);
  };

  const handleDecrease = (i) => {
    const newCart = [...cart];
    newCart[i].qty -= 1;
    if (newCart[i].qty === 0) {
      newCart.splice(i, 1);
    } 

    setCart(newCart);
  };
  const toggle = () => setOpen(!open);
  return (
    <div className='dd-wrapper'>
      <div className='dd-header' onClick={() => toggle(!open)}>
        <Badge color='secondary' badgeContent={cart.length}>
          <ShoppingCartIcon className='cart-icon' />{' '}
        </Badge>
      </div>
      {open && (
        <div className='shopping-cart-active'>
          <ul className='dd-list'>
            <h2>Order Total: ${getTotalAmount()}</h2>
            {cart.map((item, i) => (
              <li className='dd-item' key={item.id}>
                <img src={item.img} alt='product' className='cart-image' />
                <h2>{item.name}</h2>
                <button onClick={() => handleDecrease(i)}>-</button>
                <div className='quantity-div'>{item.qty}</div>
                <button onClick={() => handleIncrease(i)}>+</button>
                <div className='price-container'>
                  <h3>${item.price}</h3>
                  <span onClick={() => handleRemoveItem(i)}>Remove</span>
                </div>
              </li>
            ))}
            <div className='remove-button-container'>
              <div className='remove-item' onClick={(e) => handleRemoveAll(e)}>
                Remove all items
              </div>
              <button className='checkout-button'>Checkout</button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cart;
