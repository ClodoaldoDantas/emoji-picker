import userEvent from '@testing-library/user-event'
import { render, screen } from '@/test/utils'
import { Search } from '.'

describe('Search', () => {
  it('should render correctly', () => {
    const onSearchMock = vi.fn()

    render(<Search onSearch={onSearchMock} />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should be able to submit the form', async () => {
    const onSearchMock = vi.fn()

    render(<Search onSearch={onSearchMock} />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    await userEvent.type(input, 'testing')
    await userEvent.click(button)

    expect(onSearchMock).toHaveBeenCalledTimes(1)
    expect(onSearchMock).toHaveBeenCalledWith('testing')
  })
})
