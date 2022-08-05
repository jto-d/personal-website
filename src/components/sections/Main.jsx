import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

`

const StyledMainText = styled.div`
  margin: 0 0 10rem 15%;
  
  h1 {
    color: var(--highlight-color);
    font-style: italic;
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: .1em;
  }

  h2 {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 5rem;
    width: 100%;
    margin-top: 10px;
  }

  p {
    font-size: 1.7rem;
    font-weight: 400;
    color: var(--secondary-color);
    margin-top: 20px;
    width: 80%;
    line-height: 2rem;
  }
`
const StyledButton = styled.button`
  margin-top: 30px;
  padding: 1rem 1.5rem;
  
  color: var(--highlight-color);
  background-color: transparent;
  border: 1px solid var(--highlight-color);
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: .1em;
  cursor: pointer;



`

const Main = () => {
  return (
    <StyledMain>
      <StyledMainText>
        <h1>Hello! My name is Jack.</h1>
        <h2>I build things.</h2>
        <p>I'm a college student and software engineer based out of New Jersey. I create
          applications using code: websites, neural networks, and everything
          in between.
        </p>
        <StyledButton>
          <span>Find out more about me.</span>
        </StyledButton>

      </StyledMainText>  

    </StyledMain>
  )
}

export default Main