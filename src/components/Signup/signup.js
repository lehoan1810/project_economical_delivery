import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SignupImg from './SignupImg.png';
import SignupForm from './SignupForm';
import React from 'react';
import home from './home.png';
import { Link } from 'react-router-dom';
import ButtonBorder from '../Buttons/ButtonBoder'

const useStyles = makeStyles((theme) => ({
    img: {
        width: '90%',
        paddingRight: '10vh',
        paddingTop:'15vh'
    },
    paper: {
        background: 'linear-gradient(252.22deg, rgba(244, 154, 103, 0.43) -0.33%, rgba(0, 56, 255, 0.6) 100%);',
        padding: theme.spacing(2, 4, 3),
        height: '100vh',
    },
    Home: {
        width: '53px',
        height: '53px',
        left: '10px',
        top: '6px',
        position: 'relative',
        cursor:'pointer',
    },
    btnSignUp: {
        position: 'absolute',
        right: '6vh',
        background: 'rgba(255, 255, 255, 0.73)',
    },
    ellipse: {
        position: 'absolute',
        width: '10vh',
        height: '10vh',
        left: '45px',
        top: '22px',
        borderRadius: '50%',
        background: 'rgba(220, 215, 215, 0.92)',
        boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.25)'
    },
}))

const Signup = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.paper}>
            <Link style={{ textDecoration: 'none', color: '#333' }} to='/'>
                <div className={classes.ellipse}>
                    <img src={home} className={classes.Home} />
                </div>

            </Link>
            <ButtonBorder className={classes.btnSignUp}>
                <Link style={{ textDecoration: 'none', color: '#333' }} to='/login'> Login </Link>
            </ButtonBorder>
                <Grid container justify="center">
                    <Grid item lg={5}>
                        <SignupForm/>
                    </Grid>
                    <Grid item lg={1} ></Grid>
                    <Grid item lg={6}>
                        <img src={SignupImg} className={classes.img}/>
                    </Grid>
                    
                </Grid>
            </div>   
    )
}
export default Signup;
