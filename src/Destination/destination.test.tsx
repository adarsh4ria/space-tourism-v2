import { render, screen, userEvent } from '../utils/test-utils'
import Destination from './Destination'

describe('Testing Destination Page', () => {
  test('renders correctly', () => {
    render(<Destination />)

    const pageTitle = screen.getByText(/PICK YOUR DESTINATION/)
    expect(pageTitle).toBeInTheDocument()

    const destinationHeading = screen.getByText(/MOON/i, {
      selector: '.h2',
    })
    expect(destinationHeading).toBeInTheDocument()

    const destiantionImage = screen.getByAltText(/MOON/i)
    expect(destiantionImage).toBeInTheDocument()

    const destinationDetails1 = screen.getByText('AVG. DISTANCE')
    expect(destinationDetails1).toBeInTheDocument()

    const destinationDetails2 = screen.getByText('EST. TRAVEL TIME')
    expect(destinationDetails2).toBeInTheDocument()

    const destinationNav = screen.getAllByRole('listitem')
    expect(destinationNav).toHaveLength(4)
  })

  test('navigation works', async () => {
    render(<Destination />)
    const user = userEvent.setup()

    const navList = screen.getAllByRole('button')

    // Primary Destination
    const destination1 = screen.getByText('MOON', {
      selector: '.h2',
    })
    expect(destination1).toBeInTheDocument()

    // Destination 'MARS'
    await user.click(navList[1])

    // Destination Change
    const destination2 = screen.getByText(/MARS/i, {
      selector: '.h2',
    })
    expect(destination2).toBeInTheDocument()

    // Image change
    expect(screen.getByAltText('MARS')).toBeInTheDocument()
  })
})
