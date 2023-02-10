import styled, { keyframes } from 'styled-components';

const spinnerKeyframes = keyframes`
  0% {
    transform:rotate(0deg);
  }

  100% {
    transform:rotate(360deg);
  }
`

export const SpinnerContainer = styled.div`
  svg {
    color: ${props => props.theme['base-label']};
    font-size: 1.25rem;
    animation: ${spinnerKeyframes} 1s infinite ease-in-out;
  }
`;