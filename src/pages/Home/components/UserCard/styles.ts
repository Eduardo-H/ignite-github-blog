import styled from 'styled-components';

export const UserCardContainer = styled.header`
  width: 100%;
  padding: 2rem;

  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`;

export const UserProfileContainer = styled.div`
  display: flex;
  gap: 2rem;

  img {
    height: 10rem;
    width: 10rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      height: 7rem;
      width: 7rem;
      margin: 0 auto;
    }
  }
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.25rem 0;
`;

export const UserProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme['blue']};

    :hover {
      border-bottom: 1px solid ${props => props.theme['blue']};
    }
  }
`;

export const UserBiography = styled.p`
  font-size: 1rem;
  color: ${props => props.theme['base-text']};
  margin-top: 0.5rem;
`;

export const UserProfileFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: auto;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    color: ${props => props.theme['base-subtitle']};

    img {
      width: 1rem;
      height: 1rem;
      color: ${props => props.theme['base-label']};
    }

    svg {
      color: ${props => props.theme['base-label']};
      min-width: 1rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    margin-top: 1rem;

    div {
      font-size: 0.875rem;
    }
  }
`;