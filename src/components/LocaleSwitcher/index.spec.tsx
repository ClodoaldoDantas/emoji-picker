import { render, screen } from '@/test/utils'
import { LocaleSwitcher } from '.'
import styles from './styles.module.scss'

vi.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      locale: 'en-US',
      locales: ['en-US', 'pt-BR'],
    }
  },
}))

describe('LocaleSwitcher', () => {
  it('should render correctly', () => {
    render(<LocaleSwitcher />)
    expect(screen.getAllByRole('link')).toHaveLength(2)
  })

  it('should render links with correct labels', () => {
    render(<LocaleSwitcher />)

    expect(screen.getByRole('link', { name: 'pt-BR' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'en-US' })).toBeInTheDocument()
  })

  it('should be able to highlight the active link', () => {
    render(<LocaleSwitcher />)
    expect(screen.getByText('en-US')).toHaveClass(styles.active)
  })
})
