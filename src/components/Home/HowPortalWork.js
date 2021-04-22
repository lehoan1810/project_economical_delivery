import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import How from './How.png'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    highlight: {
    },
    highlightBack: {        
        background: 'linear-gradient(269.93deg, rgba(241, 206, 20, 0.94) 18.54%, rgba(215, 23, 23, 0.67) 103.76%)',
        color: 'rgba(0, 0, 0)',
        borderRadius: 10,
        fontFamily: 'Roboto',
        fontSize: '25px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '30px',
        letterSpacing: '0.05em',
        textAlign: 'center',
        margin: '30px',
        marginLeft: '10vw'
    },
    number: {
        border: '2px solid rgb(0, 0, 0)',
        borderRadius: 50,
        width: '1em',
        height: '2em',
        color: 'black',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '25px'
    },
    steps: {
        fontFamily: 'Montserrat',
        fontSize: '25px',
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#E90B0B',
        padding: '32px'
    },    
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'center'

    },
    howImage: {
        width: '30vw'
    }
}))

const HowPortalWork = () => {
    const classes = useStyles();
    return <Grid container 
    alignItems="center"
    justify="center">
        <Grid item lg={12}>
            <Typography className={classes.highlight}>
                <Button className={classes.highlightBack}>                    
                    How FastHub Web Booking Portal Works
                </Button>
            </Typography>
        </Grid>
        <Grid item lg={5}>
            <img src={How} className={classes.howImage}></img>
        </Grid>
        <Grid item lg={5}>
            <Typography className={classes.steps}>
                <List>
                    <ListItem>
                        <ListItemIcon className={classes.number}>
                            <Box>1</Box>                         
                        </ListItemIcon>
                        <Box class={classes.steps}>
                            Book a delivery
                        </Box>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon className={classes.number}>
                            <Box>2</Box>                         
                        </ListItemIcon>
                        <Box class={classes.steps}>
                        Give your items to our driver   
                        </Box>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon className={classes.number}>
                            <Box>3</Box>                            
                        </ListItemIcon>
                        <Box class={classes.steps}>
                        Track your items
                        </Box>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon className={classes.number}>
                            <Box>4</Box>                         
                        </ListItemIcon>
                        <Box class={classes.steps}>
                        Enjoy a reliable delivery service
                        </Box>
                    </ListItem>
                </List>
            </Typography>
        </Grid>
    </Grid>
}

export default HowPortalWork