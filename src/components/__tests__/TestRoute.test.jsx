import React from 'react';
import { render, cleanup } from '@testing-library/react';

import TestRoute from '../TestRoute';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<TestRoute />);
});

it('renders without crashing for a second time', () => {
  render(<TestRoute />);
});
