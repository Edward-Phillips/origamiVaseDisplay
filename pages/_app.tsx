import '../styles/globals.css'
import { ReactNode } from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

 return getLayout(<Component {...pageProps} />)
}
export default MyApp
