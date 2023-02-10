import styled, { keyframes } from 'styled-components';

const skeletonKeyframes = keyframes`
  0% {
    background-position: -300px 0;
  }

  100% {
    background-position: calc(300px + 100%) 0;
  }
`;

interface SkeletonProps {
  height?: string;
  width?: string;
}

export const Skeleton = styled.div<SkeletonProps>`
  height: ${props => props.height || '1.25rem'};
  width: ${props => props.width || '80%'};
  animation: ${skeletonKeyframes} 1500ms ease-in-out infinite;
  background-color: ${props => props.theme['base-input']};
  background-image: linear-gradient(
    90deg, 
    ${props => props.theme['base-input']}, 
    ${props => props.theme['base-post']}, 
    ${props => props.theme['base-input']}
  );
  background-size: inherit;
  background-repeat: no-repeat;
  border-radius: 4px;
`;

export const UserCardSkeletonContainer = styled.div`
  width: 100%;
  padding: 2rem;

  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`;

export const UserProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.25rem 0;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    margin-top: 1rem;
  }

  footer {
    display: flex;
    gap: 1rem;

    margin-top: auto;
  }
`;

export const ImageSkeleton = styled(Skeleton)`
  height: 10rem;
  width: 10rem;
  border-radius: 8px;
`;