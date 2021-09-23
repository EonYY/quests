import '../styles/globals.css'
import Layout from '../components/Layout'
import Home from '.'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default MyApp
