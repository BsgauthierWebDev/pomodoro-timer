import React from 'react';

export default function WorkLength(props) {

    function decreaseWork() {
        if (props.workLength === 1) {
            return;
        }
        props.decreaseWork();
    }

    function increaseWork() {
        if (props.workLength === 60) {
            return;
        }
        props.increaseWork();
    }

    return (
        <div>
            <h4>Work Duration</h4>
            <section className = 'interval-container'>
                <button
                    disabled = {props.isPlay === true ? 'disabled' : ''}  
                    onClick = {decreaseWork}
                >
                    Down
                    </button>
                <p className = 'interval-length'>{props.workLength}</p>
                <button 
                    disabled = {props.isPlay === true ? 'disabled' : ''} 
                    onClick = {increaseWork}
                >
                    Up
                </button>
            </section>
        </div>
    );
}