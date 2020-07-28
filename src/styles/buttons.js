const buttons = {
  button_high: {
    height: 36,
    padding: '8px 16px 8px 16px',
    boxShadow: 'none',
    borderRadius: 4,
    backgroundColor: '#7A4CFF',
    color: 'white',
    fontFamily: 'Manrope',
    textTransform: 'capitalize',
    fontSize: 14,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#7A4CFF',
      boxShadow: '0 1px 3px 2px rgba(122, 76, 255, .2)',
    },
    '&:active': {
      backgroundColor: '#5217FF',
      boxShadow: '0px 8px 9px 0px rgba(122, 76, 255, .24)',
    },
    '&:disabled': {
      backgroundColor: '#F2F2F2',
      color: 'rgba(0, 0, 0, .38)',
    },
  },
  button_normal: {
    height: 36,
    margin: 10,
    padding: '8px 16px 8px 16px',
    boxShadow: 'none',
    borderRadius: 4,
    backgroundColor: '#fff',
    borderColor: '#7A4CFF',
    border: '1px solid',
    color: '#7A4CFF',
    fontFamily: 'Manrope',
    textTransform: 'capitalize',
    fontSize: 14,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(220, 208, 255, .30)',
      borderColor: 'rgba',
    },
    '&:active': {
      backgroundColor: 'rgba(186, 162 , 255, .30)',
    },
    '&:disabled': {
      borderColor: 'rgba(0, 0, 0, .38)',
      color: 'rgba(0, 0, 0, .38)',
    }
  },
  button_low: {
    height: 36,
    padding: '8px 16px 8px 16px',
    boxShadow: 'none',
    borderRadius: 4,
    backgroundColor: '#fff',
    color: '#7A4CFF',
    fontFamily: 'Manrope',
    textTransform: 'capitalize',
    fontSize: 14,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#fff',
      color: '#9773FF',
    },
    '&:active': {
      backgroundColor: 'rgba(186,162,255, .20)',
    },
    '&:disabled': {
      color: 'rgba(0, 0, 0, .38)',
    }
  },
}

const ripple = theme => ({
  child: {
    backgroundColor: 'rgba(186,162,255)',
  }
})

export { buttons, ripple }