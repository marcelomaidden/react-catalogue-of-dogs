import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Filter from './Filter';

const handleClick = () => true;

describe('Filter', () => {
  test('renders About component', () => {
    render(<Filter handleOnClick={() => handleClick()} />, { wrapper: MemoryRouter });
    screen.getByText(/Dogs and humans/);
  });
});
