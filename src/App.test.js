import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders App and checks user name', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const nameElement = screen.getAllByText(/Nelvin Lee/i);
  expect(nameElement.length).toBeGreaterThan(0);
});
