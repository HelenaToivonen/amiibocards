import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Item from './item';

test('renders item from props data', () => {
  render(<Router>
            <Item data={{

                id:             "1",
                specie:        "Cat",
                serie:         "Series 1",
                fname:          "Bob",
                birthday:       "2021-01-01",
                personality:    "Lazy"
    
            }}/>
         </Router>);
  const species = screen.getByText(/Cat/i);
  expect(species).toBeInTheDocument();
  const serie = screen.getByText(/Series 1/i);
  expect(serie).toBeInTheDocument();
  const fname = screen.getByText(/Bob/i);
  expect(fname).toBeInTheDocument();
  const birthday = screen.getByText(/2021-01-01/i);
  expect(birthday).toBeInTheDocument();
  const personality = screen.getByText(/Lazy/i);
  expect(personality).toBeInTheDocument();
});