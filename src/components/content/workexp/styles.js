import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(5),
        marginTop: theme.spacing(5)
    },
    grid: {
        marginTop: theme.spacing(5),
        textAlign: 'justify',
        textJustify: 'inter-word'
    },
    jd: {
        fontWeight: 'bold',
        color: '#7d7d7d',
        fontSize: 16
    },
    companyDate: {
        color: '#7d7d7d',
        fontSize: 16
    },
    desc: {
        color: '#434343',
        marginTop: theme.spacing(1)
    }
}));

export default styles;