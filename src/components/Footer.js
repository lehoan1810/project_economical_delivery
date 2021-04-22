import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/EC18A007-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    logo: {
        width:'150px',
        background: 'transparent',
    },
    back: {
        background: '#C4C4C4',
        padding: '5vw 0vw 5vw 10vw'
    }
}))

const Footer = () => {
    const classes = useStyles();

    return <Typography>
        <Grid container className={classes.back} justify="center" alignItem="center">
        <Grid item lg={3} md={6}>
            <img src={logo} className={classes.logo}/>
        </Grid>
        <Grid item lg={3} md={6}>
            <List>
                <ListItem>Thông tin</ListItem>
                <ListItem>
                    Giới thiệu
                </ListItem>
                <ListItem>
                Thông tin giao hàng
                </ListItem>
                <ListItem>
                Chính sách bảo mật
                </ListItem>
                <ListItem>
                Liên hệ 
                </ListItem>
                <ListItem>
                Điều khoản và điều kiện
                </ListItem>
            </List>
        </Grid>
        <Grid item lg={3} md={6}>
        <ListItem>Hỗ trợ khách hàng</ListItem>
                <ListItem>
                Quy định chính sách
                </ListItem>
                <ListItem>
                Thành viên Vip
                </ListItem>
                <ListItem>
                Chính sách giao hàng
                </ListItem>
        </Grid>
        <Grid item lg={3} md={6}>
        Kết nối với chúng tôi
        </Grid>
    </Grid>
    </Typography>
    
}

export default Footer
