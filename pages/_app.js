import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import Redirect from '@/containers/Main/Redirect';
import store from '@/redux/configureStore';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  <Provider store={store}>
            <Redirect />
            <Component {...pageProps} />
          </Provider>
}

export default appWithTranslation(MyApp)
