import React from 'react'
import "./Card.css";
import Image from "../assets/shirt.jpeg";
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className='card'>
            <div className='card-icon'>
                <img src={Image} alt="react icon" width="100%" height="230vh" />
            </div>
            <div className='card-detail'>
                <b>product Name</b>
                <p>discribe ndjewf jnshdij jijokdn weioiom iwedjiowe </p>
            </div>
            <div className='item'>
                <button><Link to="/product" className='card-btn'>View Product</Link></button>
                <b>Price</b>
            </div>
        </div>
    )
}

export default Card;