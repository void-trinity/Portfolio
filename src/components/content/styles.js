import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    div: { 
        flexGrow: 1,
        backgroundColor: '#d1d1d1',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(5)
    }
}));

export default styles;