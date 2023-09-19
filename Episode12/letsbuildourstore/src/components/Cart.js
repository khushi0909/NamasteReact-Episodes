
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import MenuItem from "./MenuItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch()

    const handleClearCart = () => {
dispatch(clearCart());
    }


    const cartItems = useSelector((store)=> store.cart.items)
     return (
         <div className="m-4 p-4 text-center">

            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
                <button className="p-2 m-2 bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is Empty ,Add Itmes to the cart</h1>}
            {cartItems.map((item)=>(
          <MenuItem key={item.id} item={item}/>
        ))}
            </div>


    
     </div>
     )
    
}
export default  Cart;