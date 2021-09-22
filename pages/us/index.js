import React from 'react';
import Main from "containers/us/Main";
import { useRouter } from 'next/router';
import MetaManager from '@/containers/Main/MetaManager';
import {
    routes,
} from '@/config/routes/routes_us';
import nextI18NextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const pathname = useRouter().pathname;

  return (
    <>
      <MetaManager routes={routes} pathname={pathname} />
      <Main />
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"], nextI18NextConfig))
		}
	};
};