import React,{Suspense} from 'react';
import dynamic from 'next/dynamic';
import KeyVisual from '@/components/pages/Home/KeyVisual/KeyVisual';
// import Intro from '@/components/pages/Home/Introduction/Introduction';
// import Faas from '@/components/pages/Home/Faas/Faas';
// import HomeSmartAlert from './HomeSmartAlert';
// import CloudRecording from '@/components/pages/Home/CloudRecording';
// import DesignedForDogs from '@/components/pages/Home/DesignedForDogs';

const Home = () => {
  const DynamicLazyIntroComponent = dynamic(() => import(/* webpackChunkName: "Introduction" */'@/components/pages/Home/Introduction/Introduction'), {
    suspense: true,
  })
  const DynamicLazyFaasComponent = dynamic(() => import(/* webpackChunkName: "Faas" */'@/components/pages/Home/Faas/Faas'), {
    suspense: true,
  })
  const DynamicLazyHomeSmartAlertComponent = dynamic(() => import(/* webpackChunkName: "HomeSmartAlert" */'./HomeSmartAlert'), {
    suspense: true,
  })
  const DynamicLazyCloudRecordingComponent = dynamic(() => import(/* webpackChunkName: "CloudRecording" */'@/components/pages/Home/CloudRecording'), {
    suspense: true,
  })
  const DynamicLazyDesignedForDogsComponent = dynamic(() => import(/* webpackChunkName: "DesignedForDogs" */'@/components/pages/Home/DesignedForDogs'), {
    suspense: true,
  })
  const DynamicLazyRecommendComponent = dynamic(() => import(/* webpackChunkName: "Recommend" */'@/components/Recommend'), {
    suspense: true,
  })

  return (
    <>
      <KeyVisual />
      <Suspense fallback={`loading`}>
        <DynamicLazyIntroComponent />
      </Suspense>
      <Suspense fallback={`loading`}>
        <DynamicLazyFaasComponent />
      </Suspense>
      <Suspense fallback={`loading`}>
        <DynamicLazyHomeSmartAlertComponent />
      </Suspense>
      <Suspense fallback={`loading`}>
        <DynamicLazyCloudRecordingComponent />
      </Suspense>
      <Suspense fallback={`loading`}>
        <DynamicLazyDesignedForDogsComponent />
      </Suspense>
      <Suspense fallback={`loading`}>
        <DynamicLazyRecommendComponent />
      </Suspense>
    </>
  )
}

export default Home
