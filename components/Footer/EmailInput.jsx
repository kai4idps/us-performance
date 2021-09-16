import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import BLACK_TRIANGLE from '@/assets/images/general/black_triangle.svg';
import Image from '@/components/Image';
import styles from './footerStyle';

const useStyles = makeStyles(styles);

const EmailInput = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.emailInputRoot}>
            <form className={classes.emailForm}>
                <InputBase
                    className={classes.input}
                    inputProps={{
                        style: {
                            padding: '0px 0px 0px 10px',
                        },
                    }}
                    placeholder="Email"
                />
                <div className={classes.submitButtonContainer}>
                    <IconButton className={classes.submitButton}>
                        <Image
                            className={classes.blackTriangle}
                            src={BLACK_TRIANGLE.src}
                            alt="email"
                            type="image/svg+xml"
                        />
                    </IconButton>
                </div>
            </form>
        </div>
    );
};

export default EmailInput;
