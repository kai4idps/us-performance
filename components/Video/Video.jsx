import React from 'react';
import PropTypes from 'prop-types';
import {
    LazyLoadComponent,
    trackWindowScroll,
} from 'react-lazy-load-image-component';

const Video = ({
    alt,
    src,
    visibleByDefault = false,
    rwd = false,
    width,
    height,
    className,
    scrollPosition,
    ...props
}) => {
    if (visibleByDefault) {
        return <video alt={alt} src={src} {...props} />;
    } else if (rwd) {
        return (
            <LazyLoadComponent
                visibleByDefault={visibleByDefault}
                scrollPosition={scrollPosition}
                style={{ width: '100%' }}
            >
                <div className={className}>
                    <video
                        alt={alt}
                        src={src}
                        width={width}
                        height={height}
                        {...props}
                    />
                </div>
            </LazyLoadComponent>
        );
    } else {
        return (
            <LazyLoadComponent
                scrollPosition={scrollPosition}
                visibleByDefault={visibleByDefault}
            >
                <div className={className}>
                    <video
                        alt={alt}
                        src={src}
                        width={width}
                        height={height}
                        {...props}
                    />
                </div>
            </LazyLoadComponent>
        );
    }
};

Video.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    // width: PropTypes.number.isRequired,
    // height: PropTypes.number.isRequired,
    visibleByDefault: PropTypes.bool,
    rwd: PropTypes.bool,
    className: PropTypes.string,
    scrollPosition: PropTypes.object,
};

export default trackWindowScroll(Video);
