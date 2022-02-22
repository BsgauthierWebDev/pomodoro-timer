import React from 'react';
import BackToWork from '../Audio/BackToWork.wav';
import BreakTime from '../Audio/BreakTime.mp3';

export default class Timer extends React.Component {

    constructor() {
        super();

        this.state = {
            isWork: true,
            timerSecond: 0,
            intervalId: 0
        };

        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isWork) {
                        this.setState({
                            isWork: false
                        });

                        new Audio(BreakTime).play();
                        this.props.toggleInterval
                        (this.state.isWork);
                    } else {
                        this.setState({
                            isWork: true
                        });

                        new Audio(BackToWork).play();
                        this.props.toggleInterval
                        (this.state.isWork)
                    }
                } else {
                    this.props.updateTimerMinute()
                    this.setState({
                        timerSecond: 59
                    })
                }
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }

    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isWork: true
        })
    }

    render() {
        return (
            <div className = 'Timer'>
                <section className = 'timer-container'>
                    <h4>{this.state.isWork === true ? 'Work' :
                    'Break'}</h4>
                    <span className = 'timer-display'>{this.props.timerMinute}</span>
                    <span className = 'timer-display'>:</span>
                    <span className = 'timer-display'>
                        {this.state.timerSecond === 0 
                        ? '00' 
                        : this.state.timerSecond < 10 
                        ? '0' + this.state.timerSecond 
                        : this.state.timerSecond}
                    </span>
                </section>
                <section className = 'timer-actions'>
                    <button onClick = {this.playTimer}>Play</button>
                    <button onClick = {this.stopTimer}>Stop</button>
                    <button onClick = {this.resetTimer}>Reset</button>
                </section>
            </div>
        );
    }
}