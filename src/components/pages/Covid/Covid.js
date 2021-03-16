import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive,homeObjSix,homeObjSeven,homeObjEight } from './Data';
import { Button } from '../../Button';

function Covid() {
  return (
    <>
     
     <>
   <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
   </>
    </>
  );
}

export default Covid;