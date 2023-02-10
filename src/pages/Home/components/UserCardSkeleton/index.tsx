import { ImageSkeleton, Skeleton, UserCardSkeletonContainer, UserProfile, UserProfileContainer } from './styles';

export function UserCardSkeleton() {
  return (
    <UserCardSkeletonContainer>
      <UserProfileContainer>
        <ImageSkeleton />

        <UserProfile>
          <header>
            <Skeleton width="5rem" >&zwnj;</Skeleton>
            <Skeleton width="5rem" >&zwnj;</Skeleton>
          </header>

          <article>
            <Skeleton width="50%" >&zwnj;</Skeleton>
            <Skeleton width="50%" >&zwnj;</Skeleton>
          </article>

          <footer>
            <Skeleton width="7rem" >&zwnj;</Skeleton>
            <Skeleton width="7rem" >&zwnj;</Skeleton>
            <Skeleton width="7rem" >&zwnj;</Skeleton>
          </footer>
        </UserProfile>
      </UserProfileContainer>
    </UserCardSkeletonContainer>
  );
}