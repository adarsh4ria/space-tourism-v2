import { BrowserRouter } from 'react-router-dom'
import { render, screen, userEvent } from '../../utils/test-utils'
import Header from './Header'

describe('Testing Header', () => {
  test('renders correctly', () => {
    render(<Header />, { wrapper: BrowserRouter })

    const icon = screen.getByAltText('icon')
    expect(icon).toBeInTheDocument()

    // const hamburgerIcon = screen.getByText('menu')
    // expect(hamburgerIcon).toBeInTheDocument()

    const menu = screen.getByRole('button')
    expect(menu).toBeInTheDocument()
  })

  test('hamburger menu works', async () => {
    render(<Header />, { wrapper: BrowserRouter })
    const user = userEvent.setup()

    const menu = screen.getByRole('button')
    expect(screen.queryByRole('navigation')).toBeInTheDocument()
    await user.click(menu)
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    await user.click(menu)
    expect(screen.queryByRole('navigation')).toBeInTheDocument()
  })
})
