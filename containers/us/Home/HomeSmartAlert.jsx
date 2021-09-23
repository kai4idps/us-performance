import React from 'react';
import SmartAlert from '@/components/SmartAlert';
import { useTranslation } from 'next-i18next';

const HomeSmartAlert = () => {
    const { t } = useTranslation(); 
    const postContent = {
        title: t('home.smart_alert.title'),
        subtitle: t('home.smart_alert.subtitle'),
    };
    return <SmartAlert postContent={postContent} />;
};

export default HomeSmartAlert;
