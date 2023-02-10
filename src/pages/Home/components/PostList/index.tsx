import { FormEvent, useContext, useState } from 'react';

import { formatPostDate } from '../../../../utils/formatters';
import { PostsContext } from '../../../../contexts/PostsContext';
import { PostBody } from '../../../../components/PostBody';

import { EmptyPostList, PostCard, PostListContainer, SearchPostForm, SpinnerContainer } from './styles';
import { Spinner } from '../../../../components/Spinner';

export function PostList() {
  const [searchTerm, setSearchTerm] = useState('');

  const { posts, fetchPosts, isFetchingPosts } = useContext(PostsContext);

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
        isFetchingPosts
        ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )
        : (
          posts.length > 0 ?
            <PostListContainer>
              {posts.map(post => (
                <PostCard key={post.id} to={`/details/${post.number}`}>
                  <header>
                    <h2>{post.title}</h2>
                    <span>{formatPostDate(post.created_at)}</span>
                  </header>

                  <article>
                    <PostBody body={post.body} />
                  </article>
                </PostCard>
              ))}
            </PostListContainer>
            : (
              <EmptyPostList>
                <span>No posts found</span>
              </EmptyPostList>
            )
        )
      }
    </>
  );
}