import { render, screen } from '@/test/utils'
import { Header } from '.'

vi.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      locale: 'en-US',
      locales: ['en-US', 'pt-BR'],
    }
  },
}))

describe('Header', () => {
  it('should render correctly', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByTestId('description')).toBeInTheDocument()
  })
})
