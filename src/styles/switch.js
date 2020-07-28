import { withStyles } from '@material-ui/core/styles'

const switchButton = withStyles((theme) => ({ 
    root: {
        width: 50,
        height: 26,
        padding: 0,
    },
    switchBase: {
        padding: 2,
        '&$checked': {
            transform: 'translateX(24px)',
            color: theme.palette.common.white,
            '& + $track': {
            backgroundColor: '#00eebe',
            opacity: 1,
            border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#00eebe',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 22,
        height: 22,
    },
    track: {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.grey[400],
        opacity: 1,
        transition: theme.transitions.create(['background-color']),
    },
    checked: {},
    focusVisible: {},
}))

export default switchButton