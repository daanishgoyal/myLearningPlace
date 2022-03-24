import React from 'react';
import { render, screen } from '@testing-library/react';
import TeacherSpecificDetails from '../components/teachers/TeacherSpecificDetails';



describe('SearchForm', () => {
    it('renders the search form', () => {
      render(<TeacherSpecificDetails />)
  
      const heading= screen.getByRole('link', {
        name: /contactdetails/i
      })
      
      
  
      expect(heading).toBeVisible()
    })
  })