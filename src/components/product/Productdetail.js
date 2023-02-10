import React from 'react'
import "./Productdetail.css";
import { FaShoppingCart } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import Image from "../../assets/shirt.jpeg";

const Productdetail = () => {

    const handleClick = () => {
        console.log("Added");
    }

    return (
        <div className='details'>
            <div className='product-icon'>
                <div>
                    <img src={Image} alt='react logo' height="475vh" width="100%" />
                </div>
                <div className='btn'>
                    <button className='add' onClick={handleClick}><FaShoppingCart size="1.3rem" />ADD TO CART</button>
                    <button className='buy'><BsLightningFill size='1.2rem' />BUY NOW</button>
                </div>
            </div>
            <div className='product-describe'>
                <b>Product Name</b>
                <p><b>Category:</b> men's cloth</p>
                <p><b>Price:</b> 109</p>
                <p><b>Rating:</b> 4.2</p>
                <p><b>Describtion:</b> Your perfect pack.</p>
            </div>
        </div>
    )
}

export default Productdetail;