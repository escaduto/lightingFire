import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import Container from '@material-ui/core/Container';
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

const dayToImageMap = {
  1: dayOneFire,
  2: dayTwoFire,
  3: dayThreeFire,
  4: dayFourFire,
  5: dayFiveFire,
  6: daySixFire
}

function App() {

  const [slide, setSlide] = useState(1);

  const valuetext = (value) => {
    return `${17+value}`;
  }

  const handleChange = (event, newValue) => {
    setSlide(newValue);
  };

  console.log({ slide })

  return (
    <div className="App">
       <Container maxWidth="md">
        <Slider
          onChange={handleChange}
          defaultValue={1}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="off"
          step={1}
          marks={marks}
          min={1}
          max={marks.length}
        />
        <img className="fireImage" src={dayToImageMap[slide]} alt="" />
       </Container>
    </div>
  );
}

export default App;
