import { Provider } from 'react-redux';
import { useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import Redirect from '@/containers/Main/Redirect';
import store from '@/redux/configureStore';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [loading , setLoading] = useState(true);
  return  <Provider store={store}>
            <Redirect setLoading={setLoading} />
            <Component {...pageProps} />
          </Provider>
}

export default appWithTranslation(MyApp)
