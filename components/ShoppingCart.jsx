'use client'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ShoppingCart = ({ items }) => {
  const handleAddToCart = () => {
    console.log("Added to cart:", items);
  };

  return (
    <div className="ShoppingCartContainer">
      <h2>Shopping Cart</h2>
      {items.length > 0 ? (
        <>
<Popup trigger={<button className="AddToCartButton" onClick={handleAddToCart}>
            Add to Cart
          </button>} position="right center" modal nested>
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Outfit Builder </div>
            <div className="content">
              <p className='text-emerald-400'>Are you sure you want to add these items to your cart?</p>
              <ul className="CartItemsList">
                {items.map((item, index) => (
                  <li key={index} className="CartItem">
                    <img src={item.icon} alt="Clothing item" className="CartItemIcon" />
                    <span>Item {item.id}</span>
                  </li>
                ))}
              </ul>
              <p className='text-gray-800'>Total items: {items.length}</p>
            </div>
            <div className="actions">
              <button className="button" onClick={() => {
                console.log('Button clicked');
                close();
              }}>Click here</button>
            </div>
          </div>
        )}
      </Popup>          
          <ul className="CartItemsList">
            {items.map((item, index) => (
              <li key={index} className="CartItem">
                <img src={item.icon} alt="Clothing item" className="CartItemIcon" />
                <span>Item {item.id}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="EmptyCartMessage">Your cart is empty!</p>
      )}
    </div>
  );
};

export default ShoppingCart;