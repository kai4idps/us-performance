import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllArticles } from '@/redux/features/articles/articlesSlice';
import { fetchProductInfo } from '@/redux/features/product/productInfoSlice';
import { isEmpty } from 'utils/helpers';

const FetchData = () => {
    const dispatch = useDispatch();
    const region = useSelector((state) => state.region);
 
    useEffect(() => {
        let fetchDataFunction;
        if (!isEmpty(region.code)) {
            fetchDataFunction = setTimeout(() => {
                dispatch(fetchAllArticles());
                dispatch(fetchProductInfo());
            }, 3500);
        }
        return () => {
            clearTimeout(fetchDataFunction);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [region.code]);

    return null;
};

export default FetchData;
