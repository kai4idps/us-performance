// import { Provider } from "react-redux";
import { useState } from "react";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Redirect from "@/containers/Main/Redirect";
// import withRedux from "next-redux-wrapper";
import { wrapper } from "@/redux/configureStore";
import "../styles/globals.css";
import styles from "../styles/mainStyle";
import { theme } from "../styles/theme";
// import { fetchLcpImageData } from "@/redux/features/prismic/prismicSlice";

const useStyles = makeStyles(styles);

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  // store.dispatch(fetchLcpImageData());

  return (
    // <Provider store={store}>
    <>
      <Redirect setLoading={setLoading} />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
    // </Provider>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));

// export function reportWebVitals(metric) {
//   console.log('metric', metric)
// };
