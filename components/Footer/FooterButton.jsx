import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import styles from './footerStyle';

const useStyles = makeStyles(styles);

const FooterButton = (props) => {
    const { info } = props;
    const classes = useStyles();
    const router = useRouter();
    return (
        <div className={classes.linkButtonContainer}>
            <Link
                href={
                    info.href
                        ? info.href
                        : {
                            pathname: `/ca${info.path}`,
                            query: router.pathname,
                        }
                }
                passHref>
                <Button
                    className={classes.linkButton}
                >
                     {info.title}
                </Button>
            </Link>
        </div>
    );
};

export default FooterButton;

FooterButton.propTypes = {
    info: PropTypes.object,
};
