import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import key from './key.png';
import user from './user.png';
import phone from './phone.png';
import face from './face.png';
import ins from './ins.png';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({ 
    img: {
        width: '30vw'
    },
    centerAlign: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        width: '588px',
        left: '1000px',
        top: '345px',
        height: '80px'
    },
    editText: {
        background: 'white',
    },
    Key: {
        width: '35px',
        height: '35px',
        left: '2px',
        top: '7px',
        position: 'relative',
        
    },
    User: {
        width: '35px',
        height: '35px',
        left: '2px',
        top: '7px',
        position: 'relative',
    },
    inputItem:{
        width: '380px',
        height: '45px',
        left: '800px',
        top: '90px',
        backGround: '#fff',
        border: 'none',
        fontSize: '20px',
        outlineStyle: 'none',
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px'
    },
    iconUser: {
        width: '40px',
        height: '47px',
        background: '#fff',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
    },
    iconKey: {
        width: '40px',
        height: '47px',
        background: '#fff',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
    },
    textLogIn: {
        position: 'static',
        fontFamily: 'Montserrat Alternates',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '78px',
        alignItems: 'center',
        fontSize: '50px',
        margin: ' 0 10px',
        color: 'rgba(255, 208, 55, 1)',
    },
    userInput: {
        width: '150px',
        height: '45px',
        left: '800px',
        top: '90px',
        backGround: '#fff',
        border: 'none',
        fontSize: '20px',
        outlineStyle: 'none',
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px'
    },
    emailInput: {
        width: '214px',
        height: '45px',
        left: '800px',
        top: '90px', 
        backGround: '#fff',
        border: 'none',
        marginLeft: '10px',
        fontSize: '20px',
        outlineStyle: 'none',
        borderRadius: '15px',
    },
    accountName: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '100px',
        
    },
    accountText: {
        fontSize: '50px',

    },
    emailText: {
        fontSize: '50px',
    },
    rightAlign: {
        position: 'relative',
        left: '12vh',
        paddingTop: '-10px',
    },
    centerLogin: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 0 20px 0',
        width: '588px',
        left: '1000px',
        top: '345px',
        height: '100px'
    },
    Face: {
        width: '41px',
        height: '41px',
        left: '-9px',
        top: '7px',
        position: 'relative',
        padding: '0 29px 0 30px'
    },
    Ins: {
        width: '41px',
        height: '41px',
        left: '-9px',
        top: '7px',
        position: 'relative',
        padding: '0 18px 0 0'
    },
    btnLogin: {
        background: 'linear-gradient(89.94deg, #F2684A -16.83%, rgba(240, 233, 69, 0.75) 99.89%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 25,
        textTransform: 'none',
        color: 'white',
        padding: '16px 30px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '50%',
        width: '170px',
        height: '40px'
    },
    iconConnect: {
        display: 'flex',
        justifyContent: 'center',
        height: '20px'
    }
}))
const SignupForm = () => {
    const classes = useStyles();
    return (
        <Grid container style={{paddingTop:'5vh', maxWidth:'1080px'}}>
            <Grid item lg={12} className={classes.centerLogin}>
                <Typography className={classes.textLogIn}>
                    SIGN UP
                </Typography>
            </Grid>
             <Grid  item lg={5} className={classes.accountName}>
                <Typography classname={classes.accountText}>
                    Name
                </Typography>
                <Typography classname={classes.emailText}>
                    Email
                </Typography>
            </Grid>
            <Grid item lg={12} className={classes.centerAlign}>
                
                <div className={classes.iconUser}>
                    <img src={user} className={classes.User}/>
                </div>
                <input type="text" className={classes.userInput}
                />
                <input type="text" className={classes.emailInput}
                />
            </Grid>
            <Grid item lg={12} className={classes.centerAlign}>
                <div className={classes.iconUser}>
                    <img src={phone} className={classes.User}/>
                </div>
                <input type="text" className={classes.inputItem}
                />
            </Grid>
            <Grid item lg={12} className={classes.centerAlign}>
                <div className={classes.iconKey}>
                    <img src={key} className={classes.Key}/>
                </div>
                <input placeholder="password"  type="password" className={classes.inputItem}
                    
                /> 
            </Grid>
            <Grid item lg={12} className={classes.centerAlign}>
                <div className={classes.iconKey}>
                    <img src={key} className={classes.Key}/>
                </div>
                <input placeholder="confirm password" type="password" className={classes.inputItem}
                    
                /> 
            </Grid>
            <Grid item lg={12} className={classes.rightAlign}>
                    <FormControl component="fieldset" >
                        <FormGroup aria-label="position" row>
                            <FormControlLabel style={{ fontFamily: 'Montserrat' }}
                                value='end'
                                control={<Checkbox color="primary" />}
                                label="Chấp nhận các chính sách và điều kiện "
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item lg={12} className={classes.centerAlign}>
                <Button className={classes.btnLogin}>Sign Up</Button>
            </Grid>
            <Grid item lg={12} className={classes.iconConnect}>
                <img src={face} className={classes.Face}/>
                <img src={ins} className={classes.Ins} />
            </Grid>
        </Grid>
    )
}
export default SignupForm
