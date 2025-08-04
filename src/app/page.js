'use client';

import Image from 'next/image';
import { useState } from 'react';

const Page = () => {
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

export default Page;

const Products = ({ products = [], handleAddToCart }) => {
  return (
    <div className="bg-red-200 w-2/3 p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 h-full overflow-y-auto">
      {products.map((item, index) => (
        <SingleProduct
          item={item}
          key={index}
          onAddToCart={() => handleAddToCart(item)}
        />
      ))}
    </div>
  );
};

const Cart = ({ cartItems = [], handleSubmit }) => {
  return (
    <div className="bg-gray-200 w-1/3 flex-shrink-0 h-full flex flex-col">
      <h3 className="bg-red-300 text-2xl p-2">Cart</h3>
      <div className="p-2 flex-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          'No item added'
        ) : (
          <div className="flex flex-col gap-4">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item.product} qty={item.qty} />
            ))}
          </div>
        )}
      </div>
      <button
        className="bg-green-600 text-white py-2 m-2 rounded"
        onClick={handleSubmit}
      >
        Submit Order
      </button>
    </div>
  );
};

const SingleProduct = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white p-2 rounded shadow h-[250px]">
      <h3 className="text-lg p-2">{item.title}</h3>
      <div className="h-[150px] text-center">
        <Image
          src={item.thumbnail}
          alt="Product Thumbnail"
          className="h-full w-full object-cover"
          width={100}
          height={100}
        />
      </div>
      <button
        className="bg-blue-600 text-white p-1 w-full mt-2 rounded"
        onClick={onAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

const CartItem = ({ item, qty }) => {
  return (
    <div className="flex flex-row gap-3 bg-white p-2 rounded shadow">
      <div className="w-[80px] h-[80px] bg-white flex items-center justify-center">
        <Image
          src={item.thumbnail}
          alt="product preview"
          width={60}
          height={60}
        />
      </div>
      <div>
        <h3 className="font-bold">
          {item.title} <span className="text-red-600 text-2xl">× {qty}</span>
        </h3>
        <p>Product description here</p>
      </div>
    </div>
  );
};
