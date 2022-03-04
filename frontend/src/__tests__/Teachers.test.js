import { render } from '@testing-library/react'
import Teachers from '../components/teachers/Teachers.component';

it('renders homepage unchanged', () => {
  const { container } = render(<Teachers />)
  expect(container).toMatchSnapshot()
})