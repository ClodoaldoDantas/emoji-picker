import userEvent from '@testing-library/user-event'
import { render, screen } from '@/test/utils'
import { ListItem } from '.'

const mockClipboard = {
  writeText: vi.fn(),
}

Object.defineProperty(window.navigator, 'clipboard', {
  value: mockClipboard,
})

const data = {
  character: '🚀',
  unicodeName: 'rocket',
}

describe('ListItem', () => {
  it('should render correctly', () => {
    render(<ListItem data={data} />)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should be able to set unicodeName as the button title', () => {
    render(<ListItem data={data} />)

    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('title', 'rocket')
  })

  it('should copy emoji when button is clicked', async () => {
    render(<ListItem data={data} />)

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(mockClipboard.writeText).toHaveBeenCalledWith('🚀')
  })
})
