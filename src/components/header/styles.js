import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(10),
        color: 'white',
        backgroundColor: '#dedede'
    },

    icon: {
        color: '#7d7d7d',
        '&:hover': {
            cursor: 'pointer',
            color: '#272A34'
        }
    },

    a: {
        color: 'inherit'
    }
      
}));

export default styles;