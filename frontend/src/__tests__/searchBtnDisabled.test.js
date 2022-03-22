import { render, screen } from '@testing-library/react'
import SearchForm from '../components/searchForm'

describe('SearchForm', () => {
  it('renders the search form', () => {
    render(<SearchForm />)

    const heading = screen.getByRole('button', {
        name: /search/i
      })

    expect(heading).toBeDisabled()
  })
})