import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'
import { Montserrat } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <style jsx global>{`
        body,
        input {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
      <Toaster />
    </NextIntlProvider>
  )
}
