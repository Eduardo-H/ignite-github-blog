import styled from 'styled-components';

export const SearchPostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      font-size: 1.2rem;
      color: ${props => props.theme['base-subtitle']};
    }

    span:last-child {
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;

    background: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;
    color: ${props => props.theme['base-text']};

    ::placeholder {
      color: ${props => props.theme['base-label']};
    }

    :focus {
      border: 1px solid ${props => props.theme['blue']};
    }
  }
`;

export const PostListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 2rem;
`;

export const PostCard = styled.a`
  padding: 2rem;
  background: ${props => props.theme['base-post']};
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.25rem;
      color: ${props => props.theme['base-title']};
      max-width: 75%;
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']};
    }
  }

  article {
    margin-top: 1.25rem;
    text-overflow: ellipsis;
    max-height: 5.5rem;
    overflow: hidden;
  }

  :hover {
    border-color: ${props => props.theme['base-label']};
    transition: border-color 0.2s;
  }
`;

export const EmptyPostList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  
  span {
    font-size: 1.25rem;
    color: ${props => props.theme['base-label']};
  }
`;