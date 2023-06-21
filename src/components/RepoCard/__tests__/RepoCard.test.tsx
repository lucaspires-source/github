import "@testing-library/jest-dom";
import React from 'react';
import { render } from '@testing-library/react';
import RepoCard from '../RepoCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('RepoCard component', () => {
  it('renders without errors', () => {
    render(
        <Router>
          <RepoCard username="john123" reponame="my-repo" stars={10} forks={5} />
        </Router>
      );
  });
});
