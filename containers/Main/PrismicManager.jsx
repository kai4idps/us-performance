import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    fetchCampaignData,
    fetchHomepageData,
    fetchProductPageData,
    fetchFdnPageData,
    fetchFfgPageData,
    fetchSavingLivesPageData,
    fetchDfdPageData,
} from '@/redux/features/prismic/prismicSlice';

const PrismicManager = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCampaignData());
        setTimeout(() => {
            dispatch(fetchHomepageData());
            dispatch(fetchProductPageData());
            dispatch(fetchFdnPageData());
            dispatch(fetchFfgPageData());
            dispatch(fetchSavingLivesPageData());
            dispatch(fetchDfdPageData());
        }, 500);
    }, []);
    return null;
};

export default PrismicManager;