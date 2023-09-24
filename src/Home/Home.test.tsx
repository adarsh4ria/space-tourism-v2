// import Home from './Home'
import { render, screen } from '../utils/test-utils'
import { BrowserRouter } from 'react-router-dom'

import Home from './Home'

describe('Testing Home: ', () => {
  test('renders correctly', () => {
    render(<Home />, { wrapper: BrowserRouter })

    const subHeading = screen.queryByText('SO, YOU WANT TO TRAVEL TO')
    expect(subHeading).toBeInTheDocument()

    const heading = screen.queryByText(/SPACE/)
    expect(heading).toBeInTheDocument()

    const paragraph = screen.getByText(/experience/i)
    expect(paragraph).toBeInTheDocument()

    const exploreButton = screen.getByRole('link')
    expect(exploreButton).toBeInTheDocument()
  })
})
