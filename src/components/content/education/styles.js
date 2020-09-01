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
    degree: {
        fontWeight: 'bold',
        color: '#7d7d7d',
        fontSize: 16
    },
    school: {
        color: '#7d7d7d',
        fontSize: 16
    },
    marks: {
        color: '#7d7d7d',
        fontSize: 14
    }
}));

export default styles;