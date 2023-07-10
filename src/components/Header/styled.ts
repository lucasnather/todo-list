import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  height: 20rem;

  ${(props) => `background-color: ${props.theme['gray-700']}`};

  p {
    font-size: 4rem;
    font-weight: bold;

    ${(props) => `color: ${props.theme.blue}`};

    span {
      ${(props) => `color: ${props.theme['purple-dark']}`};
    }
  }
`
