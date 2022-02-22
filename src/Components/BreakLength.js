import React from 'react';

export default function BreakLength(props) {
    
    function decreaseBreak() {
        if (props.breakLength === 1) {
            return;
        }
        props.decreaseBreak();
    }

    function increaseBreak() {
        if (props.breakLength === 30) {
            return;
        }
        props.increaseBreak();
    }

    return (
        <div>
            <h4>Break Duration</h4>
            <section className = 'interval-container'>
                <button 
                    disabled = {props.isPlay === true ? 'disabled' : ''} 
                    onClick = {decreaseBreak}
                >
                    Down
                </button>
                <p className = 'interval-length'>{props.breakLength}</p>
                <button
                    disabled = {props.isPlay === true ? 'disabled' : ''}
                    onClick = {increaseBreak}
                >
                    Up
                </button>
            </section>
        </div>
    );
}