import '../styles/globals.css'
import '../styles/Home.module.css'
import app from './firebase'

export default function App({ Component, pageProps }) {

  return (
  <Component {...pageProps} />
)
}
