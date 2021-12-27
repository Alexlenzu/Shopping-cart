import React, { useState } from 'react';
import ProductCard from './ProductCard';
import tshirt from './tshirt.jpg';
import hoodie from './Hoodie.jpg';
import sweatpants from './sweatpants.jpg';
import socks from './socks.jpg';
import briefs from './briefs.jpg';
import cap from './cap.jpg';
import Cart from './Cart';

const items = [
  { id: 1, name: 'T-shirt', price: 19, img: tshirt },
  { id: 2, name: 'Hoodie', price: 29, img: hoodie },
  { id: 3, name: 'Pants', price: 55, img: sweatpants },
  { id: 4, name: 'Socks', price: 7, img: socks },
  { id: 5, name: 'Briefs', price: 9, img: briefs },
  { id: 6, name: 'Cap', price: 21, img: cap },
];

function Main() {
  const [cart, setCart] = useState([]);
  console.log(cart)

  return (
    <div className='background'>
      <div className='title-header'>
        <h1 className='title'>Stylish Clothing</h1>
        <Cart cart={cart} setCart={setCart}/>
      </div>
      <div className='card-container'>
        {items.map((item, i) => (
          <ProductCard
            key={item.name}
            item={item}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
