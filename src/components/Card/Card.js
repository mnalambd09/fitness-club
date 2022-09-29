import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props)
    const {name, img} = props.exercis || '';
    return (
        <div className='card-section'>
            <img src={img} alt="" />
            <div className='card-content'>
                <h3>from card</h3>
                <p>Lorem ipsum dolor sit amet sint rem, commodi esse obcaecati soluta, </p>
                <p>For Age : {}</p>
                <p>Time Required : {}s</p>
            </div>
            <button className='btn'>Add to list</button>
        </div>
    );
};

export default Card;