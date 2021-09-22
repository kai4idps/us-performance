/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
    alt,
    src,
    fallback,
    type = 'image/webp',
    loading = 'lazy',
    width,
    height,
    ...props
}) => {
    return (
        <picture>
            <source srcSet={src} type={type} />
            <img alt={alt} src={fallback} loading={loading} {...props} />
        </picture>
    );
};

Image.propTypes = {
    // alt: PropTypes.string.isRequired,
    // src: PropTypes.string.isRequired,
    // fallback: PropTypes.string.isRequired,
    // type: PropTypes.string,
    // loading: PropTypes.string,
    // width: PropTypes.number.isRequired,
    // height: PropTypes.number.isRequired,
};

export default Image;
