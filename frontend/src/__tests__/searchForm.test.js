import { render, screen } from '@testing-library/react'
import SearchForm from '../components/searchForm'

describe('SearchForm', () => {
  it('renders the search form', () => {
    render(<SearchForm />)

    const heading = screen.getByRole('heading', {
        name: /search for online\/home tutors/i
      })

    expect(heading).toBeInTheDocument()
  })
})