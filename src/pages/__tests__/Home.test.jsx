import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from "../Home"

it('renders without crashing', () => {
  <BrowserRouter><Home /></BrowserRouter>
});

// it('renders a clickable options for either a manager or supporter', () => {
//   const handleClick = jest.fn();
//   const { getByText } = render(
//     <Button onClick={handleClick}>Clickable</Button>
//   );
//   const button = getByText("Clickable");


//   fireEvent.click(button);

//   expect(handleClick).toHaveBeenCalledTimes(1);
// });
