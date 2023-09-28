import { render, screen, userEvent } from '../../utils/test-utils'
import Tabs from './Tabs'

const displayValues = Array(5).fill(Math.random().toString())

describe('testing Tabs helper component', () => {
  test('should render correctly', () => {
    render(
      <Tabs
        changeHandler={() => {}}
        displayValues={displayValues}
        styles={{}}
      />
    )

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(5)
  })

  test('should call function on click', async () => {
    const changeHandler = vi.fn((index: number) => index)
    render(
      <Tabs
        changeHandler={changeHandler}
        displayValues={displayValues}
        styles={{}}
      />
    )
    const user = userEvent.setup()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
    await user.click(buttons[1])
    expect(changeHandler).toBeCalled()
    expect(changeHandler).toReturnWith(1)
  })
})
