import { render, screen } from '@testing-library/react'
import LoginForm from '../components/loginForm'

describe('SearchForm', () => {
  it('renders the search form', () => {
    render(<LoginForm />)

    const heading = screen.getByRole('textbox')

    expect(heading).toHaveFocus()
  })
})