import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/general.css"
import Layout from '../components/layout'
import '../styles/general.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Layout>
<Component {...pageProps} />

    </Layout>
  ) 
}

export default MyApp
