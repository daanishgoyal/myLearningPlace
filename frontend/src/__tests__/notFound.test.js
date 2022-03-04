import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/notFound';



describe('NotFound', () => {
    it('not found page checking', () => {
      render(<NotFound />)
  
      const heading = screen.getByRole('heading', {
        name: /page not found/i
      })
  
      expect(heading).toBeInTheDocument()
    })
  })


