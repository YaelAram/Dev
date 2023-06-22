import dayjs from 'dayjs';

export const isDate = ( value ) => {
    if( !value ) return false;
    return dayjs( value ).isValid();
};
