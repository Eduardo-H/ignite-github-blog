import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

export interface Post {
  id: string;
  number: number;
  title: string;
  body: string;
  created_at: Date;
}

interface PostResponse {
  total_count: number;
  items: Post[];
}

interface PostsProviderProps {
  children: ReactNode;
}

interface PostsContextType {
  posts: Post[];
  fetchPosts: (query: string) => Promise<void>;
}

export const PostsContext = createContext({} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts(query: string = '') {
    const response = await axios.get<PostResponse>(`https://api.github.com/search/issues?q=${query}%20repo:eduardo-h/github-blog-posts`);
    setPosts(response.data.items);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      { children }
    </PostsContext.Provider>
  );
}