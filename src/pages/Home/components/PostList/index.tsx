import { FormEvent, useContext, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { formatPostDate } from '../../../../utils/formatters';
import { PostsContext } from '../../../../contexts/PostsContext';

import { EmptyPostList, PostCard, PostListContainer, SearchPostForm } from './styles';

export function PostList() {
  const [searchTerm, setSearchTerm] = useState('');
  const { posts, fetchPosts } = useContext(PostsContext);

  async function searchPosts(event: FormEvent) {
    event.preventDefault();

    await fetchPosts(searchTerm);

    setSearchTerm('');
  }

  return (
    <>
      <SearchPostForm onSubmit={searchPosts}>
        <header>
          <span>Posts</span>
          <span>{posts.length} posts</span>
        </header>

        <input 
          type="text" 
          placeholder="Search content" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchPostForm>

      {
        posts.length > 0 ?
        <PostListContainer>
          {posts.map(post => (
            <PostCard key={post.id}>
              <header>
                <h2>{post.title}</h2>
                <span>{formatPostDate(post.created_at)}</span>
              </header>

              <article>
                <ReactMarkdown>
                  {post.body}
                </ReactMarkdown>
              </article>
            </PostCard>
          ))}
        </PostListContainer>
        : (
          <EmptyPostList>
            <span>No posts found</span>
          </EmptyPostList>
        )
      }
    </>
  );
}