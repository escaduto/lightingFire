import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import './App.css';
import dayOneFire from './assets/LNU_08182020.jpg';
import dayTwoFire from './assets/LNU_08192020.jpg';
import dayThreeFire from './assets/LNU_08202020.jpg';
import dayFourFire from './assets/LNU_08212020.jpg';
import dayFiveFire from './assets/LNU_08222020.jpg';
import daySixFire from './assets/LNU_08232020.jpg';

const marks = [
  {
    value: 1,
    label: '8/18',
  },
  {
    value: 2,
    label: '8/19',
  },
  {
    value: 3,
    label: '8/20',
  },
  {
    value: 4,
    label: '8/21',
  },
  {
    value: 5,
    label: '8/22',
  },
  {
    value: 6,
    label: '8/23',
  },
];

function App() {

  const [slide, setSlide] = useState(marks.length);

  const handleChange = (event, newValue) => {
    setSlide(newValue);
  };


  return (
    <div className="App">
       <div className="container">
        <Slider
          onChange={handleChange}
          defaultValue={marks.length}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="off"
          step={1}
          marks={marks}
          min={1}
          max={marks.length}
        />
        <img className={slide !== 1 ? 'hidden' : 'fireImage'} src={dayOneFire} alt="" />
        <img className={slide !== 2 ? 'hidden' : 'fireImage'} src={dayTwoFire} alt="" />
        <img className={slide !== 3 ? 'hidden' : 'fireImage'} src={dayThreeFire} alt="" />
        <img className={slide !== 4 ? 'hidden' : 'fireImage'} src={dayFourFire} alt="" />
        <img className={slide !== 5 ? 'hidden' : 'fireImage'} src={dayFiveFire} alt="" />
        <img className={slide !== 6 ? 'hidden' : 'fireImage'} src={daySixFire} alt="" />
       </div>
    </div>
  );
}

export default App;
