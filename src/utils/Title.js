import React from 'react'
import styled from 'styled-components'
import { styles } from '.'

export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3>{message}</h3>
      <h1>{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}
Title.defaultProps = {
  message: 'our message',
  title: 'our title',
}

const TitleWrapper = styled.div`
  text-align: center;
  h3 {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '0.2rem' })};
    font-size: 1.5rem;
    color: ${styles.colors.mainYellow2};
  }
  h1 {
    ${styles.letterSpacing({ spacing: '0.2rem' })};
    font-size: 2rem;
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.1.5rem;
    background: ${styles.colors.mainYellow2};
    margin: 0.75rem auto;
  }
`
