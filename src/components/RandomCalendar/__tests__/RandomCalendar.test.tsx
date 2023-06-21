import "@testing-library/jest-dom";
import React from 'react';
import { render } from '@testing-library/react';
import RandomCalendar from '../RandomCalendar';

describe('RandomCalendar component', () => {
  it('renders without errors', () => {
    render(<RandomCalendar />);
  })
});
