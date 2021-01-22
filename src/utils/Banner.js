import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

export const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-top: 4rem;
  text-align: center;
  h1 {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    /*text-transform: capitalize;*/
    ${styles.letterSpacing({ spacing: '0.55rem' })};
    margin-bottom: 0.5rem !important;
  }
  h3 {
    color: ${styles.colors.mainYellow2};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '0.15rem' })};
    font-size: 1.5rem;
    margin-top: 0.5rem !important;
    /*text-transform: capitalize;*/
  }
`
Banner.defaultProps = {
  title: 'default title',
}
