import { uiSliceActions } from "./uiSlice";
import { cartSliceActions } from "./cartMangeSlice";
export const sendData=(cartContent)=>{
    return (dispatch)=>{
        const sendData2 = async () => {
            dispatch(
              uiSliceActions.showNotification({
                status: "pending",
                title: "loading...",
                message: "wating for order to excute",
              })
            );
            const responce = await fetch(
              "https://react2-fe651-default-rtdb.firebaseio.com/cart.json",
              {
                method: "PUT",
                body: JSON.stringify(cartContent),
              }
            );
            if (!responce.ok) {
              throw new Error("something went rong");
            }
            dispatch(
              uiSliceActions.showNotification({
                status: "success",
                title: "successed",
                message: "your order is successed",
              })
            );
          setTimeout(()=>{
            dispatch(
              uiSliceActions.showNotification({
                status: "hidden",
                title: "",
                message: "",
              })
            );
          },1000)

          };
       
          sendData2().catch((message) => {
            dispatch(
              uiSliceActions.showNotification({
                status: "error",
                title: "Error",
                message:'something went rong',
              })
            );
          });
    }
}

 export const fetchData=()=>{
    return (dispatch)=>{
        const fetchData2=async()=>{
           const responce=await fetch('https://react2-fe651-default-rtdb.firebaseio.com/cart.json');
           if(!responce.ok){
            throw new Error('somthing went wrong');
           }

           const data= await responce.json();
       
           dispatch(cartSliceActions.replace(data));
           dispatch(cartSliceActions.finalQuantaty());


        }
        fetchData2().catch(error=>{
            dispatch(
                uiSliceActions.showNotification({
                  status: "error",
                  title: "Error",
                  message:'something went rong',
                })
              );
        });
    }
}