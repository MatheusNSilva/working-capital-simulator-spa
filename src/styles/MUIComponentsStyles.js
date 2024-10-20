import * as React from 'react';
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
        fontFamily: 'Open Sans',
        fontSize: 18,
        fontWeight: 800,
    }
});

export { useFontStyles, useButtonStyles };