import React from 'react';
import { Carousel } from 'antd';
import { Typography } from 'antd';

import 'antd/dist/antd.css';
import './App.css';
import dayOneFire from './assets/LNU_08182020.jpg';
import dayTwoFire from './assets/LNU_08192020.jpg';
import dayThreeFire from './assets/LNU_08202020.jpg';
import dayFourFire from './assets/LNU_08212020.jpg';
import dayFiveFire from './assets/LNU_08222020.jpg';
import daySixFire from './assets/LNU_08232020.jpg';

const { Text } = Typography;

function App() {

  return (
    <div className="App">
       <div className="container">
        <Carousel arrows={true} dots={{ className: 'customDot'}} autoplay effect="fade" autoplaySpeed={1500}>
          <div>
            <img className="fireImage"  src={dayOneFire} alt="" />
            <div className="date"><Text>08/18/2020</Text></div>
          </div>
          <div>
            <img className="fireImage" src={dayTwoFire} alt="" />
            <div className="date"><Text>08/19/2020</Text></div>
          </div>
          <div>
            <img className="fireImage"  src={dayThreeFire} alt="" />
            <div className="date"><Text>08/20/2020</Text></div>
          </div>
          <div>
            <img className="fireImage"  src={dayFourFire} alt="" />
            <div className="date"><Text>08/21/2020</Text></div>
          </div>
          <div>
            <img className="fireImage"  src={dayFiveFire} alt="" />
            <div className="date"><Text>08/22/2020</Text></div>
          </div>
          <div>
            <img className="fireImage"  src={daySixFire} alt="" />
            <div className="date"><Text>08/23/2020</Text></div>
          </div>
        </Carousel>
       </div>
    </div>
  );
}

export default App;
