import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Arrow, CartItemContainer, ItemDetails, Quantity, RemoveButton } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x $ {price}
          <Quantity>
            <Arrow onClick={removeItemHandler}>
              &#10094;
            </Arrow>
            <RemoveButton onClick={clearItemHandler}>
              &#10005;
            </RemoveButton>
            <Arrow onClick={addItemHandler}>
              &#10095;
            </Arrow>
          </Quantity>
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
