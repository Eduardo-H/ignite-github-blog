import { PostList } from './components/PostList';
import { UserCard } from './components/UserCard';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <UserCard />

      <PostList />
    </HomeContainer>
  );
}