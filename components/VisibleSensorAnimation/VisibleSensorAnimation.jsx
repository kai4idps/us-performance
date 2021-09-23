import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';

const typeArray = ['fade', 'grow'];
const topVisibleOffset = 50;

const VisibleSensorAnimation = ({ children, animation }) => {
    const [active, setActive] = useState(false);

    if (!typeArray.some((type) => type === animation)) {
        return <>{children}</>;
    }

    return (
        <VisibilitySensor
            partialVisibility="top"
            minTopValue={topVisibleOffset}
            onChange={(isVisible) => {
                if (isVisible) {
                    setActive(true);
                }
            }}
        >
            <>
                {animation === 'fade' && <Fade in={active}>{children}</Fade>}
                {animation === 'grow' && <Grow in={active}>{children}</Grow>}
            </>
        </VisibilitySensor>
    );
};

VisibleSensorAnimation.propTypes = {
    animation: PropTypes.string,
};

export default VisibleSensorAnimation;
