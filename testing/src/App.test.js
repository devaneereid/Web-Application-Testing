import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import App from './App';


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('App renders without crashing', () => {
  render(<App />);
});

test('both scoreboards render', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/balls-score/i);
  getByTestId(/strikes-score/i)
});
