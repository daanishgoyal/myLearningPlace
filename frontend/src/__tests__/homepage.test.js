import { render } from '@testing-library/react'
import HomePage from '../components/homepage.jsx';

it('renders homepage unchanged', () => {
  const { container } = render(<HomePage />)
  expect(container).toMatchSnapshot()
})