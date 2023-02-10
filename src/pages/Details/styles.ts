import styled from 'styled-components';

export const DetailsContainer = styled.main`
  width: 100%;
  max-width: 864px;

  margin: 0 auto;
  margin-top: -3.5rem;
  padding: 0 1.5rem 5rem 1.5rem;
`;

export const PostInfo = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      text-transform: uppercase;
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: bold;
      color: ${props => props.theme['blue']};

      :hover {
        border-bottom: 1px solid ${props => props.theme['blue']};
      }
    }    
  }

  h1 {
    margin-top: 1.25rem;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 2rem;

    margin-top: 0.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 1rem;
      color: ${props => props.theme['base-span']};
      
      svg {
        color: ${props => props.theme['base-label']};
      }

      img {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;

export const PostBodyContainer = styled.article`
  padding: 2rem;

  h1, h2, h3, h4, h5, h6, p {
    margin-bottom: 1rem;
  }

  code {
    padding: 0.1rem 0.2rem;
    font-size: 0.75rem;
    border-radius: 4px;
    background: ${props => props.theme['base-border']};
  }

  pre {
    margin: 1rem 0;
    font-size: 0.875rem;

    > div {
      background: ${props => props.theme['base-post']} !important;
    }

    code {
      font-size: 0.875rem;
    }
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`