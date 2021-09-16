import React, { useState, useEffect, lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {
    routes,
    headerRoutes,
    termsLinks,
    socialLinks,
} from '@/config/routes/routes_us';
import Footer from '@/components/Footer/Footer'
import ScrollToTop from '@/components/ScrollToTop';
import FetchData from "@/container/Main/FetchData"


const Main = () => {

  return (
    <>
      <ScrollToTop />
      <FetchData />
      <Footer termsLinks={termsLinks} socialLinks={socialLinks}/>
    </>
  )
}

export default Main
