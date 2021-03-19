import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders header with text', () => {
  render(<Header />);
  const text = screen.getByText(/My amiibo cards/i);
  expect(text).toBeInTheDocument();
});
