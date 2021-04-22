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
        paddingTop: '10vh',
        paddingRightL:'10vh'
    },
    paper: {
        background: 'linear-gradient(252.22deg, rgba(244, 154, 103, 0.43) -0.33%, rgba(0, 56, 255, 0.6) 100%);',
        padding: theme.spacing(2, 4, 3),
        height: '100vh',
    },
}))

const Signup = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.paper}>
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
