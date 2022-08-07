import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../../store/cartMangeSlice";

const ProductItem = (props) => {
  const cartContent = useSelector((state) => state.cart.cartContent);
  const myCartContent=cartContent.slice();
  const dispatch = useDispatch();
  const { title, price, description,quantity,id } = props;
  const clickHandler = () => {
     let adding=true;
    myCartContent.forEach((el) => {
     
      if (el.id === id) {
        adding=false;
        dispatch(cartSliceActions.addQuantity(id));
        dispatch(cartSliceActions.finalQuantaty());
        return;
      }
    });
    if(!adding){
      return;
    }
    dispatch(
      cartSliceActions.addToCart({
        title,
        quantity,
        total: price*quantity,
        price,
        id: id,
      })
      );
      dispatch(cartSliceActions.finalQuantaty());
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={clickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
