import { Navbar, Footer } from './components'
import { Main, About, Work, Skills } from './components/sections'
import styled from 'styled-components'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
