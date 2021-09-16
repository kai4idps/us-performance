import { Provider } from 'react-redux'
import Redirect from '@/container/Main/Redirect';
import store from '@/redux/configureStore';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  <Provider store={store}>
            <Redirect />
            <Component {...pageProps} />
          </Provider>
}

export default MyApp
