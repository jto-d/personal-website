import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  p {
    width: 60%;
    color: var(--primary-color);
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

const About = () => {
  return (
    <StyledAbout>
      <h1>About Me</h1>
      <p>Hi! My name is Jack O'Donnell and I'm a computer science major at Princeton University
        in the Class of 2026. I'm planning on pursuing a certificate in finance or entrepreneurship.
        My interest in coding began in 3rd grade creating small games using Scratch, which quickly led
        to teaching myself Python and basic web development.
      </p>
      <br></br>
      <p>In my free time I enjoy skiing, traveling, and listening to music.</p>

    </StyledAbout>
  )
}

export default About