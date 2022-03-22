import React from 'react';
import { render, screen } from '@testing-library/react';
import TeachersNotFound from '../components/teachers/TeachersNotFoundComponent';



describe('TeachersNotFound', () => {
    it('renders TeachersNotFound checking', () => {
      render(<TeachersNotFound />)
  
      const heading= screen.getByRole('heading', {
        name: /no results found for this search/i
      })
      
  
      expect(heading).toBeInTheDocument()
    })
  })