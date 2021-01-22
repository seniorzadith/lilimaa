import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import Navbar from './Global/Navbar/Navbar'
import Footer from './Global/Footer'
import './layout.css'

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </div>
)

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Karu-Regular', sans-serif;
  color:#262626;
  background:#fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
