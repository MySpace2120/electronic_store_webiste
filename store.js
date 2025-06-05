// pages/index.js
import React, { useState } from "react";
import Link from "next/link";

const products = [
  {
    name: "LED TV",
    price: 15999,
    category: "TVs",
    image: "https://via.placeholder.com/150x100?text=LED+TV"
  },
  {
    name: "Smart AC",
    price: 28999,
    category: "Air Conditioners",
    image: "https://via.placeholder.com/150x100?text=Smart+AC"
  },
  {
    name: "Double Door Fridge",
    price: 22500,
    category: "Refrigerators",
    image: "https://via.placeholder.com/150x100?text=Fridge"
  },
  {
    name: "Top Load Washing Machine",
    price: 18000,
    category: "Washing Machines",
    image: "https://via.placeholder.com/150x100?text=Washing+Machine"
  },
  {
    name: "Microwave Oven",
    price: 7999,
    category: "Ovens",
    image: "https://via.placeholder.com/150x100?text=Microwave"
  },
  {
    name: "Android Mobile Phone",
    price: 12499,
    category: "Mobiles",
    image: "https://via.placeholder.com/150x100?text=Mobile+Phone"
  },
  {
    name: "Electric Kettle",
    price: 1499,
    category: "Home Appliances",
    image: "https://via.placeholder.com/150x100?text=Kettle"
  },
  {
    name: "Ceiling Fan",
    price: 2199,
    category: "Home Appliances",
    image: "https://via.placeholder.com/150x100?text=Fan"
  },
  {
    name: "Mixer Grinder",
    price: 2999,
    category: "Kitchen Appliances",
    image: "https://via.placeholder.com/150x100?text=Mixer"
  }
];

export default function ElectronicsStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">
          <Link href="/about"><span className="hover:underline cursor-pointer">Shakti Radios</span></Link>
        </h1>
        <p className="text-xl text-gray-600">Built on Trust, Backed by Service - Since 1959</p>
        <p className="text-md text-gray-500 mt-1">Located in Karan Market, Jammu</p>
      </header>

      <input
        type="text"
        placeholder="Search products..."
        className="mb-6 max-w-md mx-auto block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="rounded-2xl shadow-md border border-gray-200 overflow-hidden">
            <div className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-lg text-green-600 font-medium">₹{product.price}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded">{product.category}</span>
              <p className="text-sm text-gray-500 mt-1 mb-2">Visit our store for more discounts!</p>
              <button onClick={() => addToCart(product)} className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 border-t">
        <h2 className="text-2xl font-bold text-gray-700">🛒 Cart Summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">No items in the cart.</p>
        ) : (
          <>
            <ul className="list-disc pl-6 text-gray-700">
              {cart.map((item, idx) => (
                <li key={idx}>{item.name} - ₹{item.price}</li>
              ))}
            </ul>
            <p className="mt-4 text-xl font-semibold text-blue-600">Total: ₹{totalPrice}</p>
          </>
        )}
      </div>

      <footer className="text-center mt-10 text-gray-600">
        <p>📍 Shakti Radios, Karan Market, Jammu</p>
        <p>🕒 Open: Mon-Sat, 10am - 7pm</p>
        <p>📞 Contact: +91-XXXXXXXXXX</p>
      </footer>
    </div>
  );
}