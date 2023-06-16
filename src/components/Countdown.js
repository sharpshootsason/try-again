import React, {useState, useEffect} from "react";
//import ReactDOM from 'react-dom/client';
import './styles.css';
//import App from './App';


const targetCount = new Date("2023-12-31T23:59:59");

const getTimeLeft = () => {
  const totalLeft = targetCount - new Date();
  const days = Math.floor(totalLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor(totalLeft / ((1000 * 60)) % 60);
  const seconds = Math.floor((totalLeft / 1000) % 60);
  return {days, hours, minutes, seconds}
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState (() => getTimeLeft());


  useEffect(() => {
       const timer = setInterval(() => {
    setTimeLeft(getTimeLeft())
  }, 1000)

  return() => {
    clearInterval(timer);
  }
}, []);

return (
  <div className="countdown">
    <h2>New Years Countdown</h2>



    <div className="box">
      <div className="value">
        <span>{timeLeft.days}</span>
      </div>
      <span className="label">days</span>
    </div>


    <div className="box">
      <div className="value">
        <span>{timeLeft.hours}</span>
      </div>
      <span className="label">hours</span>
    </div>




    <div className="box">
      <div className="value">
        <span>{timeLeft.minutes}</span>
      </div>
      <span className="label">minutes</span>
    </div>



    <div className="box">
      <div className="value">
        <span>{timeLeft.seconds}</span>
      </div>
      <span className="label">seconds</span>
    </div>

  </div>
)
};




export default Countdown