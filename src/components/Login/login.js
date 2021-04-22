import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoginImg from './LoginImg.png';
import LoginForm from './LoginForm';
import React from 'react';
import home from './home.png';
import loginImg from './LoginImg.png';
import { Link } from 'react-router-dom';
import ButtonBorder from '../Buttons/ButtonBoder'
const useStyles = makeStyles((theme) => ({
    img: {
        width: '110%',
    },
    paper: {
        background: 'linear-gradient(252.22deg, rgba(244, 154, 103, 0.43) -0.33%, rgba(0, 56, 255, 0.6) 100%)',
        padding: theme.spacing(2, 4, 3),
        height: '100vh',
    },
    Home: {
        width: '53px',
        height: '53px',
        left: '18px',
        top: '1px',
        position: 'relative',
        cursor:'pointer',
    },
    LoginImg: {
        width: '53px',
        height: '53px',
        left: '18px',
        top: '1px',
        position: 'relative',
    },
    btnSignUp: {
        position: 'absolute',
        right: '6vh',
        background: 'rgba(255, 255, 255, 0.73)',
    }
    
}))

const Login = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.paper}>
            <Link style={{ textDecoration: 'none', color: '#333' }} to='/'>
                <img src={home} className={classes.Home} />

            </Link>
            <ButtonBorder className={classes.btnSignUp}>
                <Link style={{ textDecoration: 'none', color: '#333' }} to='/signup'> Signup </Link>
            </ButtonBorder>
            <Grid container justify="center">
                
                <Grid item lg={5}>
                    <img src={LoginImg} className={classes.img}/>
                </Grid>
                <Grid item lg={1} ></Grid>
                <Grid item lg={6} >
                    <LoginForm className={classes.editFormLogin} />
                </Grid>
            </Grid>
            
        </div>   
    )
}
export default Login;
