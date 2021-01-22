import styled from 'styled-components'
import { styles } from '../utils'

const BannerButton = styled.button`
  display: inline-block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.3rem;
  font-weight: 700;
  border: 1px solid var(--mainWhite);
  ${styles.border({ color: `${styles.colors.mainWhite}` })};
  margin-top: 2rem;
  ${styles.transition({})};

  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  display: inline;
  color: ${styles.colors.mainBlack};
  margin-top: 2rem;
  border: 1px solid var(--mainWhite);
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
`

export { BannerButton, SectionButton }
