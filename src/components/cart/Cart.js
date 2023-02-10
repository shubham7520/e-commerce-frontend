import React from 'react'
import Image from "../../assets/shirt.jpeg";
import "./Cart.css";

const Singleitem = () => {
    return (
        <div className='cart-container'>
            <div>
                <img src={Image} alt="react-icon" height="130vh" width="100%" />
            </div>
            <div className='cart-detail'>
                <b>product name</b>
                <p>price</p>
                <button>REMOVE</button>
            </div>
        </div>
    )
}

const Cart = () => {
    return (
        <div >
            <Singleitem />
        </div>
    )
}

export default Cart;