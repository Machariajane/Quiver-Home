import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive,homeObjSix,homeObjSeven,homeObjEight } from './Data';


function Home() {
  return (
    <>
     
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjFive} />
      <HeroSection {...homeObjSix} />
      <HeroSection {...homeObjSeven} />
      <HeroSection {...homeObjEight} />

    </>
  );
}

export default Home;
