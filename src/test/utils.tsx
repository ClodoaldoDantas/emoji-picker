import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { NextIntlProvider } from 'next-intl'
import messages from '@/locales/en-US.json'

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <NextIntlProvider locale="en-US" messages={messages}>
      {children}
    </NextIntlProvider>
  )
}

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
