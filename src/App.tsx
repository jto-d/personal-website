import { useEffect } from 'react'
import styled from 'styled-components'
import { Gradient } from 'whatamesh'

import ReactLogo from './assets/react.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* background-color: black; Black background */
`

const Text = styled.h1`
  position: relative;
  z-index: 2;
  font-size: 5rem;  /* Adjust size as needed */
  color: transparent; /* Make text transparent so canvas shows through */
  -webkit-background-clip: text;
  background-clip: text;
`

const Logo = styled.img`
  width: 100px; /* Adjust the size as needed */
  height: auto;
  z-index: 2; /* Ensure the logo is above the canvas */
`

const Canvas = styled.canvas`
  position: absolute;
  z-index: 0;
  width: 100vw; /* Make canvas large enough to cover the text */
  height: 100vh;
  pointer-events: none; /* Ensure it's not interactable */
  top: 0;
  left: 0;
  /* --gradient-color-1: #3B413C;
  --gradient-color-2: #9DB5B2;
  --gradient-color-3: #DAF0EE;
  --gradient-color-4: #FFFFFF; */
  /* --gradient-color-1: #18438a;
  --gradient-color-2: #226fae;
  --gradient-color-3: #55a0e2;
  --gradient-color-4: #9abfe2; */
  --gradient-color-1: #18438a;
  --gradient-color-2: #226fae;
  --gradient-color-3: #55a0e2;
  --gradient-color-4: #85a7c8;
  /* --gradient-color-1: #846A6A;
  --gradient-color-2: #A2999E;
  --gradient-color-3: #C6C7C4;
  --gradient-color-4: #EEF0F2; */
    /* --gradient-color-1: #4F646F;
  --gradient-color-3: #32021F;
  --gradient-color-2: #DEE7E7;
  --gradient-color-4: #FFF9FB; */
`

function App() {
  useEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient("#gradient-canvas")
  }, [])

  return (
    <Container>
      {/* <Logo src={ReactLogo}></Logo> */}

      <Canvas id="gradient-canvas"></Canvas>
      
      
    </Container>
  )
}

export default App
