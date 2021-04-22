import Grab from './Grab.png';
import GHN from './GHN.png';
import Shipchung from './Shipchung.png';
import Lala from './Lala.png';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    brand: {
           
    },
    gray: {
        marginBottom:'30px',
        background: 'linear-gradient(265.89deg, rgba(141, 134, 134, 0.5) 0%, rgba(202, 192, 192, 0.27) 99.79%)',
    }
}))

const Partner = () => {
    const classes = useStyles();

    return <div className={classes.gray}>
        <Grid container justify="center" alignItems="center" >
            <Grid item >
                <img src={Grab} classesName={classes.brand}/>
            </Grid>        
            <Grid item lg={2}></Grid>
            <Grid item >
                <img src={GHN}  classesName={classes.brand}/>
            </Grid>
            
            <Grid item >
                <img src={Lala} classesName={classes.brand}/>
            </Grid>
            <Grid item lg={1}></Grid>
            <Grid item > 
                <img src={Shipchung} classesName={classes.brand}/>
            </Grid>
        </Grid>
    </div>
}

export default Partner;
