import { render, cleanup } from '@testing-library/react';

import CSVReader from '../CSVReader';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<CSVReader />);
});
