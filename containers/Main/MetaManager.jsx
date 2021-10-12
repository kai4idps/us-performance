import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import PropTypes from "prop-types";
import Head from "next/head";

const MetaManager = (props) => {
  const { routes, pathname } = props;
  const { t } = useTranslation("common");

  const [seoInfo, setSeoInfo] = useState({
    title: "",
    metatitle: "",
    metaDescription: "",
  });

  useEffect(() => {
    const title = routes.find((route) => route.path === pathname)?.title || "";
    const metaTitle =
      routes.find((route) => route.path === pathname)?.metaTitle || "";
    const metaDescription =
      routes.find((route) => route.path === pathname)?.metaDescription || "";
    setSeoInfo({ ...seoInfo, title, metaTitle, metaDescription });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Head>
      <title>{t(seoInfo.title)}</title>
      <meta
        name="title"
        content={t(seoInfo.metaTitle)}
        data-react-helmet="true"
      />
      <meta
        name="description"
        content={t(seoInfo.metaDescription)}
        data-react-helmet="true"
      />
      <meta
        name="google-site-verification"
        content="uLgcQNBG8POEjgIJQ5PrcOUOnUCLHkWt4l2j_mafdlw"
      />
    </Head>
  );
};

MetaManager.propTypes = {
  routes: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default MetaManager;
