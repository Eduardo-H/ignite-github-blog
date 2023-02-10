import { useEffect, useState } from 'react';
import axios from 'axios';

import { PostList } from './components/PostList';
import { UserCard } from './components/UserCard';
import { UserCardSkeleton } from './components/UserCardSkeleton';

import { HomeContainer } from './styles';

export interface User {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  company: string;
  followers: number;  
}

export function Home() {
  const [user, setUser] = useState<User>({} as User);
  const [isFetchingUserData, setIsFetchingUserData] = useState(true);

  async function fetchUserData() {
    const response = await axios.get<User>('https://api.github.com/users/eduardo-h');

    setUser(response.data);
    setIsFetchingUserData(false);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <HomeContainer>
      {
        isFetchingUserData ? <UserCardSkeleton /> : <UserCard user={user} />
      }

      <PostList />
    </HomeContainer>
  );
}