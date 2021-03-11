import React from 'react';
import { render, screen } from '@testing-library/react';

import About from './About';

describe('About', () => {
  test('renders About component', () => {
    render(<About />);
    screen.getByText(/dogs/);
  });
});
