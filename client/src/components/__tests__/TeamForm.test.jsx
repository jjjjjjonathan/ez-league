import { render, cleanup } from '@testing-library/react';

import TeamForm from '../TeamForm';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<TeamForm />);
});
