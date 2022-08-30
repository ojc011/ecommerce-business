import './cart-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
          <span className="quantity">
            <div className="arrow" onClick={removeItemHandler}>
              &#10094;
            </div>
            <div className="remove-button" onClick={clearItemHandler}>
              &#10005;
            </div>
            <div className="arrow" onClick={addItemHandler}>
              &#10095;
            </div>
          </span>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
