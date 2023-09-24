import { render, screen, userEvent } from '../utils/test-utils'
import Technology from './Technology'

describe('Testing Technology Page', () => {
  test('renders correctly', () => {
    render(<Technology />)

    const pageTitle = screen.getByText(/SPACE LAUNCH 101/)
    expect(pageTitle).toBeInTheDocument()

    const destinationHeading = screen.getByText(/LAUNCH VEHICLE/i, {
      selector: '.h3',
    })
    expect(destinationHeading).toBeInTheDocument()

    const technologyImage = screen.getByAltText(/LAUNCH VEHICLE/i)
    expect(technologyImage).toBeInTheDocument()

    const technologyNav = screen.getAllByRole('button')
    expect(technologyNav).toHaveLength(3)
  })

  test('navigation works', async () => {
    render(<Technology />)
    const user = userEvent.setup()

    const navList = screen.getAllByRole('button')

    // Primary Technology
    const technology1 = screen.getByText(/LAUNCH VEHICLE/i, {
      selector: '.h3',
    })
    expect(technology1).toBeInTheDocument()

    // Technology 'MARS'
    await user.click(navList[1])

    // Technology Change
    const technology2 = screen.getByText(/SPACEPORT/i, {
      selector: '.h3',
    })
    expect(technology2).toBeInTheDocument()

    // Image change
    expect(screen.getByAltText(/SPACEPORT/i)).toBeInTheDocument()
  })
})
