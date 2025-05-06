import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DSIcon } from './Icon' // import all stories from the stories file

describe('DSIcon Component', () => {
  it('renders without crashing', () => {
    render(<DSIcon icon='placeholder' />)
  })

  it.skip('query ByTestId', () => {
    const { getByTestId } = render(<DSIcon icon='placeholder' data-testid='id-testid' />)
    const element = getByTestId('id-testid')
    expect(element).toBeInTheDocument()
  })
})
