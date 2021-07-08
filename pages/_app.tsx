import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { FilterProvider } from '../src/contexts/filter'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FilterProvider>
      <Component {...pageProps} />
    </FilterProvider>
  )
}
export default MyApp
