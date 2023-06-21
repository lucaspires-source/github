import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

import { APIRepo } from '../../@types';

interface Data {
  repo?: APIRepo;
  error?: string;
}

const Repo: React.FC = () => {
  const { username, reponame } = useParams<{ username: string; reponame: string }>();
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${username}/${reponame}`);
        if (!response.ok) {
          throw new Error('Repository not found!');
        }
        const repoData: APIRepo = await response.json();
        setData({ repo: repoData });
      } catch (error) {
        if (error instanceof Error) {
          // ✅ TypeScript knows err is Error
          setData({ error: error.message });
        } else {
          console.log('Unexpected error', error);
        }
      }
    };

    fetchData();
  }, [reponame, username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.repo) {
    return <h1>Loading...</h1>;
  }

  const { repo } = data;

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className="username" to={`/${username}`}>
          {username}
        </Link>
        <span>/</span>
        <Link className="reponame" to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </Breadcrumb>

      <p>{repo.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{repo.stargazers_count}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{repo.forks}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={repo.html_url}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
