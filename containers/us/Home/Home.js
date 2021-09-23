import React from 'react';
import KeyVisual from '@/components/pages/Home/KeyVisual/KeyVisual';
import Intro from '@/components/pages/Home/Introduction/Introduction';
import Faas from '@/components/pages/Home/Faas/Faas';
import HomeSmartAlert from './HomeSmartAlert';
import CloudRecording from '@/components/pages/Home/CloudRecording';
import DesignedForDogs from '@/components/pages/Home/DesignedForDogs';

const Home = () => {
  return (
    <>
      <KeyVisual />
      <Intro />
      <Faas />
      <HomeSmartAlert />
      <CloudRecording />
      <DesignedForDogs />
    </>
  )
}

export default Home
