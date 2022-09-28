import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props)
    const {name, img} = props.exercis || '';
    return (
        <div className=''>
            <h1>from card</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Card;