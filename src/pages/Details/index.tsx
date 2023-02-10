import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowUpRightFromSquare, faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import { PostBody } from '../../components/PostBody';

import githuSvg from '../../assets/icons/github.svg';

import { DetailsContainer, PostInfo, PostBodyContainer } from './styles';

interface Post {
  user?: {
    login: string;
  };
  created_at: string;
  comments: number;
  html_url: string;
  title: string;
  body: string;
}

export function Details() {
  const [post, setPost] = useState<Post>({} as Post);

  const urlParams = useParams();

  async function fetchPost() {
    const response = await axios.get<Post>(`https://api.github.com/repos/eduardo-h/github-blog-posts/issues/${urlParams.id}`);
    setPost(response.data as Post);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <DetailsContainer>
      <PostInfo>
        <header>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Back
          </NavLink>

          <a href={post.html_url} target="_blank">
            See on GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <h1>{post.title}</h1>

        <footer>
          <div>
            <img src={githuSvg} alt="" />
            <span>{post.user?.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>{new Date(post.created_at).toLocaleDateString('pt-BR')}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{post.comments} comments</span>
          </div>
        </footer>        
      </PostInfo>

      <PostBodyContainer>
        <PostBody body={post.body} />
      </PostBodyContainer>
    </DetailsContainer>
  );
}