import React from 'react';
import './Status.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

const Status = () => {
    return (
        <div>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h4>Noor Alam</h4>
                    <p><FontAwesomeIcon icon={faLocationPin} />Bangladesh</p>
                </div>
            </div>
            <div className='body-status'>
                <div>
                    <h3>75<small>kg</small></h3>
                    <p className='headding'>Weight</p>
                </div>
                <div>
                    <h3>6.5</h3>
                    <p className='headding'>Height</p>
                </div>
                <div>
                    <h3>25<small>yrs</small></h3>
                    <p  className='headding'>Age</p>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className='break-section'>
                <div className='time' >
                    <p className='seconds'>10<small>s</small></p>
                </div>
                <div >
                    <p className='seconds'>20<small>s</small></p>
                </div>
                <div >
                    <p className='seconds'>30<small>s</small></p>
                </div>
                <div >
                    <p className='seconds'>40<small>s</small></p>
                </div>
            </div>
            <h3>Exercise Details</h3>
            <div className='exercise-time'>
                <div>
                    <h4>Exercise Time</h4>
                </div>
                <div className='exercise-seconds'>
                    <p>200 <small>seconds</small></p>
                </div>
            </div>
            <br />
            <div className='exercise-time'>
                <div>
                    <h4>Break Time</h4>
                </div>
                <div className='exercise-seconds'>
                    <p>15 <small>seconds</small></p>
                </div>
            </div>

            <div>
                <button className='btn-activity'>Activity Completed</button>
            </div>
            
        </div>
    );
};

export default Status;