import Head from 'next/head';
import Main from "@/container/us/Main";
// import nextI18NextConfig from "../../next-i18next.config";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {

  return (
    <>
      <Head>
         <title>
            Furbo Dog Camera | Furbo Dog Camera - Treat-tossing Pet Camera with
            HD
        </title>
        <meta
            name="title"
            content="Furbo Dog Camera | Furbo Dog Camera - Treat-tossing Pet Camera with HD"
        />
        <meta
            name="description"
            content="Furbo Dog Camera lets you see, talk and toss treats to your dog when you're not home. It's the #1 best-selling interactive pet camera. Furbo alerts you when your dog barks by sending you Bark Alerts on your phone. Over 5,000 vets and professional dog trainers recommend using Furbo to ease separation anxiety in dogs."
        />
      </Head>
      <Main />
    </>
  )
}

// export const getServerSideProps = async ({ locale }) => {

// 	return {
// 		props: {
// 			...(await serverSideTranslations(locale, ["common"]))
// 		}
// 	};
// };
