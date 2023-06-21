/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileData from '../ProfileData';

describe('ProfileData component', () => {
  it('renders correctly with props', () => {
    const props = {
      username: 'john123',
      name: 'John Doe',
      avatarUrl: 'https://example.com/avatar.jpg',
      followers: 100,
      following: 50,
      company: 'ABC Company',
      location: 'New York',
      email: 'john@example.com',
      blog: 'https://example.com/blog',
    };

    render(<ProfileData {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(props.username)).toBeInTheDocument();
    expect(screen.getByAltText(props.username)).toBeInTheDocument();
    expect(screen.getByText(`followers`)).toBeInTheDocument();
    expect(screen.getByText(`following`)).toBeInTheDocument();
    expect(screen.getByText(props.company)).toBeInTheDocument();
    expect(screen.getByText(props.location)).toBeInTheDocument();
    expect(screen.getByText(props.email)).toBeInTheDocument();
    expect(screen.getByText(props.blog)).toBeInTheDocument();
  });

  it('renders correctly with optional props', () => {
    const props = {
      username: 'john123',
      name: 'John Doe',
      avatarUrl: 'https://example.com/avatar.jpg',
      followers: 100,
      following: 50,
      // Omitting optional props
    };

    render(<ProfileData {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(props.username)).toBeInTheDocument();
    expect(screen.getByAltText(props.username)).toBeInTheDocument();
    expect(screen.getByText(`followers`)).toBeInTheDocument();
    expect(screen.getByText(`following`)).toBeInTheDocument();
    expect(screen.queryByText(/company/i)).toBeNull();
    expect(screen.queryByText(/location/i)).toBeNull();
    expect(screen.queryByText(/email/i)).toBeNull();
    expect(screen.queryByText(/blog/i)).toBeNull();
  });
});

