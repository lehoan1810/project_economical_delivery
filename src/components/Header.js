import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import logo from '../assets/EC18A007-logo.png';
import clsx from  'clsx';
import Hidden from '@material-ui/core/Hidden';
import ButtonBorder from './Buttons/ButtonBoder';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    logo:{
        maxHeight: '100px',
    },
    buttonborder: {
        borderRadius: 50,
        border: '8px',
        boxShadow: 'inset 0 0 0 4px #F2994A',
    },
    navbutton: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        background: 'transparent',
        color: 'black',
        height: 48,
        padding: '24px 30px',
        textTransform: 'none',
        margin: '16px',
        "&:hover": {
            backgroundColor: 'transparent',//remove hover
            }
    },
    typographyStyle: {
        fontFamily: 'Roboto Condensed',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: '400',
        textAlign: 'left',
    },
}));

const theme = createMuiTheme({
palette: {
    primary: {
    main: '#fff',//white
    },
    secondary: {
    main: '#F2994A',//orange
    },
},
});

const Header = () => {
    const classes = useStyles();

    return <div className="classes.root">
        <ThemeProvider theme={theme}>
            <AppBar position="static" elevation={0}>
                <Typography variant="h6" className={classes.typographyStyle}>
                    <Toolbar >
                        <Grid container justify="space-between" alignItems="center" spacing={24}>
                            <Grid item ls={2}>                                
                                <img alt="" src={logo} className={classes.logo}/>  
                            </Grid>
                            <Hidden mdDown>
                                <Grid item ls={8}>
                                    <Button color="inherit" className={classes.navbutton} disableTouchRipple='true'>Home</Button>
                                    <Button color="inherit" className={classes.navbutton} disableTouchRipple='true'>Services</Button>
                                    <Button color="inherit" className={classes.navbutton} disableTouchRipple='true'>About</Button>
                                    <Button color="inherit" className={classes.navbutton} disableTouchRipple='true'>Contact</Button>
                                </Grid>
                            </Hidden>                            
                            <Grid item ls={2}>
                                <ButtonBorder >
                                    <Link style={{ textDecoration: 'none', color: '#333'}} to='/login'> Login </Link>
                                </ButtonBorder>
                                <ButtonBorder >
                                    <Link style={{ textDecoration: 'none', color: '#333'}} to='/signup'> Signup </Link>
                                </ButtonBorder>
                                    
                            </Grid>                           
                        </Grid>                       
                    </Toolbar>
                    
                </Typography>
            </AppBar>
        </ThemeProvider>
    </div>
}

export default Header
