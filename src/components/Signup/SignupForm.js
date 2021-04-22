import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    img: {
        width: '30vw'
    },
    centerAlign: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
    },
    editText: {
        background: 'white',
    }
}))
const SignupForm = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item lg={12} className={classes.centerAlign}>
                <Typography>
                    SignUp
                </Typography>
            </Grid>
            <Grid item lg={12} className={classes.centerAlign}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid item lg={12} className={classes.centerAlign}>
                <TextField className={classes.editText} id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid item lg={12} className={classes.centerAlign}>
                <Button>Signup</Button>
            </Grid>
            <Grid item></Grid>
            <Grid item></Grid>
        </Grid>
    )
}
export default SignupForm
