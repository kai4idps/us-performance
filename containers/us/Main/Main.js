import React, { useState, useEffect, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {
    routes,
    headerRoutes,
    termsLinks,
    socialLinks,
} from '@/config/routes/routes_us';
import { useRouter } from 'next/router'
import Banner from '@/components/Banner';
// import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HomeButton from '@/components/HomeButton/HomeButton';
import HeaderLinks from '@/components/HeaderLinks/HeaderLinks';
import ScrollToTop from '@/components/ScrollToTop';
import FetchData from "@/containers/Main/FetchData";
import PrismicManager from '@/containers/Main/PrismicManager';
import styles from './mainStyle';

const useStyles = makeStyles(styles);

const ContentsBlock = (props) => {
  const { content } = props;
  if(!content){
      return <></>
  }
  return content.component()
}

ContentsBlock.propTypes = {
    content: PropTypes.object.isRequired,
};

const Main = () => {
  const classes = useStyles();
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const homeRootClasses = `${classes.root} ${classes.banner}`;
  const getContentBlock = routes.find((item)=> item.path === pathname);

  const DynamicFooterComponent = dynamic(() => import(/* webpackChunkName: "Footer" */'@/components/Footer/Footer'), {
    suspense: true,
  })

  useEffect(() => {
        if (pathname === '/us') {
            setIsHomePage(true);
        } else {
            setIsHomePage(false);
        }
  }, [pathname]);

  return (
    <div className={isHomePage ? homeRootClasses : classes.root}>
      <ScrollToTop />
      <CssBaseline />
      <FetchData />
      <Header
          brand={<HomeButton />}
          pageLinks={
              <HeaderLinks
                  routes={headerRoutes}
                  onClose={() => setDrawerOpen(false)}
              />
          }
          banner={isHomePage ? <Banner /> : null}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          fixed
      />
      <PrismicManager dispatch={dispatch}/>
      <Container maxWidth="lg" style={{ padding: 0 }}>
        <ContentsBlock content={getContentBlock} />
      </Container>
       <Suspense fallback={`loading`}>
        <DynamicFooterComponent termsLinks={termsLinks} socialLinks={socialLinks}/>
      </Suspense>
    </div>
  )
}

export default Main
