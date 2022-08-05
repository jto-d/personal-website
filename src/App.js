import { Navbar, Footer } from './components'
import { Main, About, Work, Skills, Contact } from './components/sections'
import styled from 'styled-components'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
