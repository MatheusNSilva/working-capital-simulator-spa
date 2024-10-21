import { makeStyles } from '@mui/styles';

const useFontStyles = makeStyles({
    root: {
        color: '#666',
        fontFamily: 'Open Sans',
        fontSize: 16,
        fontWeight: 600,
    }
});

const useButtonStyles = makeStyles({
    root: {
        color: '#ffffff',
        '&.MuiButton-contained': {
            fontFamily: 'Open Sans',
            fontWeight: 800,
        },
        '&.MuiButton-outlined': {
            color: '#E77600',
            fontFamily: 'Open Sans',
            fontWeight: 800,
        }
    },

});

export { useFontStyles, useButtonStyles };