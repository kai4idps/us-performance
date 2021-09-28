/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { updateRegion, fetchRegion } from '@/redux/features/region/regionSlice';
import { updateLanguage } from '@/redux/features/region/languageSlice';
import { isEmpty, getElementFromDivision } from '@/utils/helpers';
import {
  REGION_INFO,
  VALID_ROUTES,
} from '@/config/navigation';

const Redirect = ( props ) => {
  const { setLoading } = props;
  const endpoint = useRef('');
  const basepath = useRef('');
  const redirectType = useRef('');
  const pathname = useRouter().pathname;
  const dispatch = useDispatch();
  const region = useSelector((state) => state.region);

  useEffect(() => {
    const path = `${getElementFromDivision(pathname, '/', 1)}`;
    endpoint.current = pathname.replace(`/${path}`, '');
    const matchedRouteInfo =
      VALID_ROUTES.find((route) => route.path === `/${path}`) ||
      VALID_ROUTES[0];
    redirectType.current = matchedRouteInfo.type;
    if (region?.country) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'page_view',
            path_country: region.country,
        });
    }
       if (
          `${path}/${getElementFromDivision(pathname, '/', 2)}` ===
          'pages/faq'
          ) {
          redirectType.current = 'faq';
          const info =
              REGION_INFO?.[
                  getElementFromDivision(pathname, '/', 3)?.toUpperCase()
              ];
          if (!isEmpty(info)) {
              dispatch(updateRegion(info));
          } else {
              dispatch(fetchRegion());
          }
        } else if (redirectType.current === 'root') {
            basepath.current = path;
            endpoint.current = pathname;
            dispatch(fetchRegion());
       } else if (redirectType.current === 'region') {
            const info = REGION_INFO?.[matchedRouteInfo.code.toUpperCase()];
            if (basepath.current === info?.code) {
                return;
            }
            dispatch(updateRegion(info));
            dispatch(updateLanguage(info))
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'page_view',
                path_country: info?.country,
            });
       } else if (
            redirectType.current === 'terms_conditions' ||
            redirectType.current === 'privacy_policy' ||
            redirectType.current === 'shipping_return_warranty' ||
            redirectType.current === 'furbojpchat' 
        ) {
            const info =
                REGION_INFO?.[
                    getElementFromDivision(pathname, '/', 2)?.toUpperCase()
                ];
            if (!isEmpty(info)) {
                dispatch(updateRegion(info));
            } else {
                dispatch(fetchRegion());
            }
        } else if (redirectType.current === 'webconsole'||
            redirectType.current === 'furbo-dog-nanny' ) {
            dispatch(fetchRegion());
            setLoading(false);
      }
  }, [pathname])
  return null
}

export default Redirect
