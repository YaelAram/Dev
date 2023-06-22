export const createThree = ( X, WX, ZX, Y, WY, ZY ) => {
    return {
        'X': {
            'value': X,
            'W': WX,
            'Z': ZX
        },
        'Y': {
            'value': Y,
            'W': WY,
            'Z': ZY
        }
    }
};

export const createThree3 = ( X, VX, WX, Y, VY, WY, Z, VZ, WZ ) => {
    return {
        'X': {
            'value': X,
            'V': VX,
            'W': WX
        },
        'Y': {
            'value': Y,
            'V': VY,
            'W': WY
        },
        'Z': {
            'value': Z,
            'V': VZ,
            'W': WZ
        }
    }
};
