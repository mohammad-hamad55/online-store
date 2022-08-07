import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


const Cart = (props) => {
 

  const cartContent = useSelector((state) => state.cart.cartContent);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartContent.map((el) => (
          <CartItem item={el} key={el.id}></CartItem>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
