import styled from 'styled-components';

import coverImg from '../../assets/cover.svg';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${coverImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    height: 10rem;
  }
`;