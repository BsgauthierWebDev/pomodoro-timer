import React from 'react';
import './App.css';
import BreakLength from './BreakLength';
import WorkLength from './WorkLength';
import Timer from './Timer';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      workLength: 25,
      timerMinute: 25,
      isPlay: false
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);

    this.onIncreaseWorkLength = this.onIncreaseWorkLength.bind(this);
    this.onDecreaseWorkLength = this.onDecreaseWorkLength.bind(this);

    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);

    this.onToggleInterval = this.onToggleInterval.bind(this);

    this.onResetTimer = this.onResetTimer.bind(this);

    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength:prevState.breakLength - 1
      }
    })
  }

  onIncreaseWorkLength() {
    this.setState((prevState) => {
      return {
        workLength: prevState.workLength + 1,
        timerMinute: prevState.workLength + 1
      }
    })
  }

  onDecreaseWorkLength() {
    this.setState((prevState) => {
      return {
        workLength: prevState.workLength - 1,
        timerMinute: prevState.workLength - 1
      }
    })
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isWork) {
    if (isWork) {
      this.setState({
        timerMinute: this.state.workLength
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.workLength
    })
  }
  
  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    })
  }

  render() {
    return (
      <div className='App'>
        <img 
          className = 'App__background'
          src = 'https://www.minuteschool.com/wp-content/uploads/2017/11/blog-nov16-1080x630.jpg'
          alt = ''
        />
        <h1>Pomodoro Timer</h1>
        <Timer 
          timerMinute={this.state.timerMinute}
          breakTimer = {this.state.breakLength} 
          updateTimerMinute = {this.onUpdateTimerMinute}
          toggleInterval = {this.onToggleInterval}
          resetTimer = {this.onResetTimer}
          onPlayStopTimer = {this.onPlayStopTimer}
        />
        <section className='length-container'>
        <WorkLength 
            isPlay = {this.state.isPlay}
            workLength={this.state.workLength} 
            increaseWork = {this.onIncreaseWorkLength}
            decreaseWork = {this.onDecreaseWorkLength}
          />
          <BreakLength
            isPlay = {this.state.isPlay}
            breakLength={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak = {this.onDecreaseBreakLength}
          />
        </section>
      </div>
    );
  }
}