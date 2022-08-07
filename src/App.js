import Cart from "./components/Cart/Cart";
import MainHeader from "./components/Layout/MainHeader";

import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect,Fragment } from "react";

import { sendData,fetchData } from "./store/cartActionCreators";
import Notification from "./components/UI/Notifactions";
let isInatal=true;
function App() {
  const cartVis = useSelector((state) => state.ui.cartVis);
  const cartContent = useSelector((state) => state.cart.cartContent);
  const showNotification = useSelector((state) => state.ui.notification);
  const chinged=useSelector(state=>state.cart.chinged);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(fetchData());
  },[dispatch])

  useEffect(() => {

  if(isInatal){
    isInatal=false;
    return;
  }
  if(chinged){
    dispatch(sendData(cartContent));
  }
  
  }, [cartContent, dispatch,chinged]);

  return (
    <Fragment>
       {showNotification && (
        <Notification
          status={showNotification.status}
          title={showNotification.title}
          message={showNotification.message}
        ></Notification>
      )}
     <MainHeader></MainHeader>
      {cartVis && <Cart />}
      <Products />
    </Fragment>

     
    
  );
}

export default App;
