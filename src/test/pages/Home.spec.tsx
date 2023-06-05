import userEvent from '@testing-library/user-event'
import { render, screen } from '@/test/utils'
import Home, { getStaticProps } from '@/pages'

vi.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      locale: 'en-US',
      locales: ['en-US', 'pt-BR'],
    }
  },
}))

const emojiList = [
  { slug: 'alien', unicodeName: 'alien', character: '👽' },
  { slug: 'pile-of-poo', unicodeName: 'pile of poo', character: '💩' },
  { slug: 'ghost', unicodeName: 'ghost', character: '👻' },
]

describe('Home', () => {
  it('should render correctly', () => {
    render(<Home emojiList={emojiList} />)

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('should be able filter list', async () => {
    render(<Home emojiList={emojiList} />)

    const searchInput = screen.getByRole('textbox') as HTMLInputElement
    const searchButton = screen.getByRole('button', { name: 'Search emoji by name' })

    await userEvent.type(searchInput, 'ghost')
    await userEvent.click(searchButton)

    expect(screen.getAllByRole('listitem')).toHaveLength(1)
    expect(screen.queryByText('No items found')).toBeNull()
  })

  it('should be able display message if the list is empty', async () => {
    render(<Home emojiList={emojiList} />)

    const searchInput = screen.getByRole('textbox') as HTMLInputElement
    const searchButton = screen.getByRole('button', { name: 'Search emoji by name' })

    await userEvent.type(searchInput, 'not found')
    await userEvent.click(searchButton)

    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
    expect(screen.getByText('No items found')).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    vi.spyOn(window, 'fetch').mockImplementationOnce(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(emojiList),
      } as any)
    })

    const response = await getStaticProps({
      locale: 'en-US',
    })

    expect(response.props).toHaveProperty('emojiList', emojiList)
  })
})
