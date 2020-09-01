import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(5),
        marginTop: theme.spacing(5)
    },
    grid: {
        marginTop: theme.spacing(3),
        textAlign: 'justify',
        textJustify: 'inter-word',
        color: '#434343',
        fontWeight: 'bold'
    },
}));

export default styles;