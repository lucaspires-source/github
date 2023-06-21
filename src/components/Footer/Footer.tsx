import React from 'react';
import { Container, Line, GithubLogo } from './styles';

const Footer : React.FC   = () => {
  return (
    <Container>
      <Line data-testid="line" />
      <GithubLogo data-testid="github-logo" />
    </Container>
  );
};

export default Footer;
