import React, { Component } from 'react';
import './App.css';
import Timer2 from './timer2'
import Calcultime from './calcultime'

class App extends Component {
  // millensecond(){
  //  let d = new Date(80000);
  //  let n = d.toLocaleTimeString();
// console.log (n)
// console.log(msToTime(300000))
// return n
    // }
msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

  render() {
       return (
      <div className="App">
       {/* <label>{this.msToTime(3000)}</label> */}
       <Timer2 temps={this.msToTime(67800)} />
      </div>
    );
  }
}

export default App;
