import { GlobalStyles } from 'twin.macro'
import { TycheProvider } from '../context/TycheContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <TycheProvider>
        <Component {...pageProps} />
      </TycheProvider>
    </>)
}

export default MyApp
