import { useEffect, useState } from 'react';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import githuSvg from '../../../../assets/icons/github.svg';

import { 
  UserCardContainer, 
  UserProfile, 
  UserProfileContainer,  
  UserBiography, 
  UserProfileFooter, 
  UserProfileHeader 
} from './styles';

interface User {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  company: string;
  followers: number;  
}

export function UserCard() {
  const [user, setUser] = useState<User>({} as User);

  async function fetchUserData() {
    const response = await axios.get<User>('https://api.github.com/users/eduardo-h');

    setUser(response.data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserCardContainer>
      <UserProfileContainer>
        <img src={user.avatar_url} alt="Foto de perfil de Eduardo" />

        <UserProfile>
          <UserProfileHeader>
            <h1>{user.name}</h1>

            <a href={user.html_url} target="_blank">
              GitHub
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </UserProfileHeader>

          <UserBiography>
            {
              user.bio ? user.bio : 'No bio.'
            }
          </UserBiography>

          <UserProfileFooter>
            <div>
              <img src={githuSvg} alt="" />
              <span>{user.login}</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company ? user.company : 'No company'}</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user.followers} followers</span>
            </div>
          </UserProfileFooter>
        </UserProfile>
      </UserProfileContainer>
    </UserCardContainer>
  )
}