import { useSelector } from "react-redux";
import FoodItem from "./FoodItemCart";





const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items)
    
    return(
        <div >
            
            <h1 className="font-bold">Cart Items</h1>
            <div className="flex">
            {
                cartItems.map((Foods)=><FoodItem key={Foods.id} {...Foods} />

                )
            }
            </div>
        </div>
    )
}
export default Cart;