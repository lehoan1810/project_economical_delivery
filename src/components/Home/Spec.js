import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Express from './Express.png';
import Quality from './Quality.svg';
import Support from './Support.svg';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    card: {
        height: '50vh',
        alignItem: 'center',  
    },
    big:{
        fontFamily: 'Roboto, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        textAlign: 'center',
        lineHeight: '130%'
    },
    smol:{
        fontFamily: 'Roboto, sans-serif',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        textAlign: 'center',
        lineHeight: '130%'
    },
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'30px',
        marginBottom: '30px'

    },
    title: {
        fontFamily: 'Roboto, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        textAlign: 'center',
        lineHeight: '130%',
        maxWidth: '12em',
    }
}));

const Spec = () => {

    const classes = useStyles();

    return <Grid container 
    alignItems="center"
    justify="center">
        <Grid item lg={12}>
            <Typography className={classes.big}>
                <Container className={classes.title}>
                The best delivery for our customers
                </Container>
            </Typography>
        </Grid>
        <Grid item lg={5} className={classes.container}>
            <img src={Express} className={classes.card}/>
            <Typography className={classes.big}>
                Express
            </Typography>
            <Typography className={classes.smol}>
                Giao hàng nhanh chóng, tiện lợi
            </Typography>                
        </Grid>
        <Grid item lg={5} className={classes.container}>
                <img src={Quality} className={classes.card}/>
                <Typography className={classes.big} >
                    Quality
                </Typography>
                <Typography className={classes.smol} >
                Giao hàng uy tín, đảm bảo chất lượng
                </Typography>
        </Grid>
        <Grid item lg={12} className={classes.container}>
            <img src={Support} className={classes.card}/>
            <Typography className={classes.big}>
                Support
            </Typography>
            <Typography className={classes.smol}>
                Hỗ trợ 24/7, chăm sóc khách hàng tận tình
            </Typography>
        </Grid>
    </Grid>
}

export default Spec