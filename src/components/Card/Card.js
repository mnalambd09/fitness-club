import React, {useState } from 'react';
import './Card.css'

const Card = (props) => {
    const {exerciseTimeHandler} = props;
    const {name, img, Description, age, time} = props.exercis || '';
    return (
        <div className='card-section'>
            <img src={img} alt="" />
            <div className='card-content'>
                <h3>{name}</h3>
                <p>{Description} </p>
                <p>For Age : {age}</p>
                <p>Time Required : {time}s</p>
                
            </div>
            <button onClick={()=>exerciseTimeHandler(props.exercis)} className='btn'>Add to list</button>
        </div>
    );
};

export default Card;