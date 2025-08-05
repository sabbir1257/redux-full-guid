'use client';
import { Cart } from '@/components/Cart';
import { Products } from '@/components/Products';
import { useState } from 'react';

export const RootComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const index = cartItems.findIndex((c) => c.product.id === item.id);
    if (index !== -1) {
      cartItems[index].qty += 1;
    } else {
      cartItems.push({ product: item, qty: 1 });
    }
    setCartItems([...cartItems]);
  };

  const handleSubmit = () => {
    alert('Order submitted!');
    setCartItems([]);
  };

  const demoProducts = [
    { id: 1, title: 'Sample Product', thumbnail: '/image/download.jpeg' },
    { id: 2, title: 'Another Product', thumbnail: '/image/download1.jpeg' },
  ];

  return (
    <div className="flex w-full h-screen">
      <Products products={demoProducts} handleAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} handleSubmit={handleSubmit} />
    </div>
  );
};
