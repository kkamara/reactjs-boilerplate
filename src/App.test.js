import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test button link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test button/i);
  expect(linkElement).toBeInTheDocument();
});
