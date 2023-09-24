import { render, screen, userEvent } from '../utils/test-utils'
import Crew from './Crew'

describe('Testing Crew Page', () => {
  test('renders correctly', () => {
    render(<Crew />)

    const pageTitle = screen.getByText(/MEET YOUR CREW/)
    expect(pageTitle).toBeInTheDocument()

    const crewName = screen.getByText(/VEERAMUTHUVEL/i, {
      selector: '.h3',
    })
    expect(crewName).toBeInTheDocument()

    const crewImage = screen.getByAltText(/VEERAMUTHUVEL/i)
    expect(crewImage).toBeInTheDocument()

    const navList = screen.getAllByRole('button')
    expect(navList).toHaveLength(4)
  })

  test('navigation works', async () => {
    render(<Crew />)
    const user = userEvent.setup()

    const navList = screen.getAllByRole('button')

    // Primary Crew
    const crewName1 = screen.getByText(/VEERAMUTHUVEL/i, {
      selector: '.h3',
    })
    expect(crewName1).toBeInTheDocument()

    // Crew 'MARS'
    await user.click(navList[1])

    // Crew Change
    const destination2 = screen.getByText(/SRIKANT/i, {
      selector: '.h3',
    })
    expect(destination2).toBeInTheDocument()

    // Image change
    expect(screen.getByAltText(/SRIKANT/i)).toBeInTheDocument()
  })
})
