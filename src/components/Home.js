import React from 'react'
import Card from './Card';
import "./Card.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <Link to='/product' className='home-card'><Card /></Link>
            <Link to='/product' className='home-card'><Card /></Link>
            <Link to='/product' className='home-card'><Card /></Link>
            <Link to='/product' className='home-card'><Card /></Link>
            <Link to='/product' className='home-card'><Card /></Link>

        </div>
    )
}

export default Home;