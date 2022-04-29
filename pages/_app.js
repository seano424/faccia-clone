import '../styles/globals.css'
import CursorProvider from '../context/CursorContext'

function MyApp({ Component, pageProps }) {
  return (
    <CursorProvider>
      <Component {...pageProps} />
    </CursorProvider>
  )
}

export default MyApp
