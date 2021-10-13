import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import KeyVisual from "@/components/pages/Home/KeyVisual/KeyVisual";
// import KeyVisual from '@/components/cms/KeyVisual';
// import Intro from '@/components/pages/Home/Introduction/Introduction';
// import Faas from '@/components/pages/Home/Faas/Faas';
// import HomeSmartAlert from './HomeSmartAlert';
// import CloudRecording from '@/components/pages/Home/CloudRecording';
// import DesignedForDogs from '@/components/pages/Home/DesignedForDogs';
// import Recommend from '@/components/Recommend';
// import SaveDogsLives from '@/components/pages/Home/SaveDogsLives';
// import PressQuotes from '@/components/pages/Home/PressQuotes';
// import BestSeller from '@/components/BestSeller';
// import ScrollToTopButton from '@/components/ScrollToTopButton';

const Home = () => {
  const positionToScroll = 5000;

  const DynamicLazyIntroComponent = dynamic(
    () =>
      import(
        /* webpackChunkName: "Introduction" */ "@/components/pages/Home/Introduction/Introduction"
      ),
    {
      suspense: true,
    },
  );
  const DynamicLazyFaasComponent = dynamic(
    () =>
      import(
        /* webpackChunkName: "Faas" */ "@/components/pages/Home/Faas/Faas"
      ),
    {
      suspense: true,
    },
  );
  const DynamicLazyHomeSmartAlertComponent = dynamic(
    () => import(/* webpackChunkName: "HomeSmartAlert" */ "./HomeSmartAlert"),
    {
      suspense: true,
    },
  );
  const DynamicLazyCloudRecordingComponent = dynamic(
    () =>
      import(
        /* webpackChunkName: "CloudRecording" */ "@/components/pages/Home/CloudRecording"
      ),
    {
      suspense: true,
    },
  );
  const DynamicLazyDesignedForDogsComponent = dynamic(
    () =>
      import(
        /* webpackChunkName: "DesignedForDogs" */ "@/components/pages/Home/DesignedForDogs"
      ),
    {
      suspense: true,
    },
  );
  const DynamicLazyRecommendComponent = dynamic(
    () => import(/* webpackChunkName: "Recommend" */ "@/components/Recommend"),
    {
      suspense: true,
    },
  );
  const DynamicSaveDogsLivesComponent = dynamic(
    () =>
      import(
        /* webpackChunkName: "SaveDogsLives" */ "@/components/pages/Home/SaveDogsLives"
      ),
    {
      suspense: true,
    },
  );
  const DynamicPressQuotesComponent = dynamic(
    () =>
      import(
        /* webpackChunkName: "PressQuotes" */ "@/components/pages/Home/PressQuotes"
      ),
    {
      suspense: true,
    },
  );
  const DynamicBestSellerComponent = dynamic(
    () =>
      import(/* webpackChunkName: "BestSeller" */ "@/components/BestSeller"),
    {
      suspense: true,
    },
  );
  const DynamicScrollToTopButtonComponent = dynamic(
    () =>
      import(
        /* webpackChunkName: "ScrollToTopButton" */ "@/components/ScrollToTopButton"
      ),
    {
      suspense: true,
    },
  );

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
      <Suspense fallback={`loading`}>
        <DynamicSaveDogsLivesComponent />
      </Suspense>
      <Suspense fallback={`loading`}>
        <DynamicPressQuotesComponent />
      </Suspense>
      <Suspense fallback={`loading`}>
        <DynamicBestSellerComponent />
      </Suspense>
      <Suspense fallback={`loading`}>
        <DynamicScrollToTopButtonComponent
          positionToScroll={positionToScroll}
        />
      </Suspense>

      {/* <Intro/>
      <Faas/>
      <HomeSmartAlert/>
      <CloudRecording/>
      <DesignedForDogs/>
      <Recommend/>
      <SaveDogsLives/>
      <PressQuotes/>
      <BestSeller/>
      <ScrollToTopButton positionToScroll={positionToScroll}/> */}
    </>
  );
};

export default Home;
