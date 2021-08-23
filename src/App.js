import React, { useEffect } from 'react';
import Header from './components/Header';
import Particles from './components/Particles';
import About from './components/About';
import AOS from "aos";
import "aos/dist/aos.css";

const animation_set = {
  animate: true,
  duration: 750,
  once: false,
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: animation_set.duration,
      once: animation_set.once,
      disable: !animation_set.animate,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header/>
      <Particles/>
      <About/>
    </div>
  );
}

export default App;
