import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [cartTotal, setCartTotal] = useState();
  //
  useEffect(() => {setCartTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0) ); 
  }, [cart]);
  
  return (
    <div>
      <h3><b>Total Price: {cartTotal}</b></h3>
      {cart.map((item) => (
        <div style={{ border: "1px solid grey" }}>
          <div style={{ marginLeft: "10px", marginTop: "5px" }}>
            <span>
              <b>Quantity </b>
            </span>
            <span>
              <input
                className="qtyInput"
                type="number"
                defaultValue={item.qty} //1
                onChange={(e) => {
                  dispatch({
                    type: "CHANGE_QTY",
                    payload: { ...item, qty: e.target.value }
                  });
                }}
              />
            <b> Sub Total: {(item.qty* item.price)}</b></span>
          </div>
          <div className="cartItem">
            <div>
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: 50, objectFit: "cover" }}
              />
            </div>
            <span>{item.title}</span>
            <h5> <b>Unit Price: {item.price} ETB</b></h5>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Cart;
