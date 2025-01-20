// animations.js
import {keyframes} from 'styled-components';

// Define your keyframes here
export const projectAnimation = keyframes`
  0% {
    transform: rotate(-5deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-5deg);
  }
`;

export const glowingEffect=keyframes`

  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 75px #ff0000;
  }
  100% {
    text-shadow: 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #ff0000, 0 0 35px #ff0000, 0 0 45px #ff0000, 0 0 60px #ff0000, 0 0 100px #ff0000;
  }

`

export const glowingEffectForH1=keyframes`

  0% {
    text-shadow: 0 0 5px #001220, 0 0 10px #fff, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 75px #ff0000;
  }
  100% {
    text-shadow: 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #ff0000, 0 0 35px #ff0000, 0 0 45px #ff0000, 0 0 60px #ff0000, 0 0 100px #ff0000;
  }

`


export const colorEffectAnimation = keyframes`
  0% {
    color: whitesmoke;
    background-color: transparent;
  }
  50% {
    color: transparent;
    background-color: transparent;
  }
  100% {
    color: whitesmoke;
    background-color: transparent;
  }
`;

export const colorEffectAnimationForH1 = keyframes`
  0% {
    color: #001220;
    background-color: transparent;
  }
  50% {
    color: transparent;
    background-color: transparent;
  }
  100% {
    color: #001220;
    background-color: transparent;
  }
`;

export const borderEffectAnimation = keyframes`
  0% {
    border-color: whitesmoke;
    background-color: transparent;
  }
  50% {
    color: transparent;
    background-color: transparent;
  }
  100% {
    border-color: whitesmoke;
    background-color: transparent;
  }
`;

export const boxShadowEffectAnimation = keyframes`
  0% {
    border-color: whitesmoke;
    background-color: #0e0d0d;
    box-shadow: 0 0 5px #007bff;
  }
  50% {
    color: transparent;
    background-color: transparent;
    box-shadow: 0 0 5px transparent;
  }
  100% {
    border-color: whitesmoke;
    background-color: #0e0d0d;
    box-shadow: 0 0 5px #007bff;
  }
`;

