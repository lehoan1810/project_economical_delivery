import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import JoinUsIllus from './JoinUsIllus.svg';
import Wave from './Wave.svg';
import clsx from  'clsx';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    slogan: {
        fontFamily: 'Montserrat, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '40px',
        letterSpacing: '0.05em',
        lineHeight: '130%',
        paddingBottom: '16px',
        paddingTop:'2em',
        paddingLeft: '24px',
    },
    small: {
        width:'15em',
        fontSize: '25px',
        fontWeight: 'normal',
        paddingBottom: '1em',
        paddingLeft: '24px',
    },
    buttonJoinNow:{
        background: 'linear-gradient(269.94deg, #F2994A 0.11%, rgba(240, 213, 69, 0.75) 93.34%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 25,
        textTransform: 'none',
        color: 'white',
        padding: '16px 30px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '130%',
    },
    joinUsIllus:{
        maxHeight: '50vh',
        maxWidth: '80vw',
        paddingTop: '16px',
        position: 'relative',
        left: '50%',
        transform:'translateX(-50%)',
    },
    wave: {        
        maxWidth: '99vw',
    },
    center:{
        position: 'relative',
        left: '50%',
        transform:'translateX(-50%)',
    }
}));

const JoinNow = () => {
    
    const classes = useStyles();

    return <Grid container alignItem='center'>
        <Grid item lg={1}></Grid>
        <Grid item lg={3} md={6} xs={12}>
            <Container fixed>
                <Typography className={classes.slogan} >
                    <Container fixed>
                        Move safely and quickly
                    </Container>
                    <Container fixed className={classes.small}>
                        Connecting people
                        Improving lives
                    </Container>
                    <Button className={clsx(classes.buttonJoinNow,classes.center)}>Join now</Button>                 
                </Typography>                     
            </Container>
        </Grid>
        <Grid item lg={7} md={6}>
            <Container fixed>
                <img src={JoinUsIllus} className={classes.joinUsIllus}/>
            </Container>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={12}>
            <img src={Wave} className={classes.wave}/>
        </Grid>
    </Grid>
}

export default JoinNow
