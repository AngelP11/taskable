const slider = {
    root: {
        color: "#7A4CFF",
    },
    thumb : {
        marginTop: -4,
        '&:disabled': {
            backgroundColor: 'black', 
        }
    },
    track: {
        height: "4px !important",
        borderRadius: 0,
    },
    rail: {
        height: '4px !important',
        borderRadius: 0,
    },
    mark: {
        height: 4,
        width: 4,
        borderRadius: 0,
    }
}

export default slider