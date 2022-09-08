import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import {
  Arrow,
  CartItemContainer,
  ItemDetails,
  Quantity,
  RemoveButton,
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x $ {price}
          <Quantity>
            <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
            <Arrow onClick={addItemHandler}>&#10095;</Arrow>
          </Quantity>
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
