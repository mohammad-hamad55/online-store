import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../store/cartMangeSlice';

const CartItem = (props) => {
  const dispatch=useDispatch();
  const { title, quantity, total, price,id } = props.item;

  const addClickHandler=()=>{
    dispatch(cartSliceActions.addQuantity(id));
    dispatch(cartSliceActions.finalQuantaty());
  }
  const subClickHandler=()=>{
    if(quantity<=1){
      dispatch(cartSliceActions.removeItem(id));
      dispatch(cartSliceActions.finalQuantaty());
    }
    else{
      dispatch(cartSliceActions.subQuantity(id));
      dispatch(cartSliceActions.finalQuantaty());
    }
    
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={subClickHandler}>-</button>
          <button onClick={addClickHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
