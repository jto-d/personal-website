import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { Navbar, Footer } from './components'
import styled from 'styled-components'

import { Home, Blog } from './pages'

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/blog" element={<Blog />} />
      
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
