import { render, screen } from '@/test/utils'
import { List } from '.'

describe('List', () => {
  it('should render correctly', () => {
    render(<List>list content</List>)
    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})
