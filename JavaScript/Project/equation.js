class Equation{
    constructor( ...coefficients ){
        this.coefficients = coefficients;
    }

    grade(){
        return ( this.coefficients.length - 1 );
    }

    evaluate( incognite ){
        let accumulator = 0;
        this.coefficients.forEach( ( value, index ) => 
                            accumulator += ( value * Math.pow( incognite, ( this.grade() - index ) ) ) );
        return accumulator
    }

    segment( value, index, incognite ){
        let str = ( ( value>=0 && index !== 0 ) ? '+' : '' ) + 
                    ( ( Math.abs( value ) !== 1 || index === this.grade() ) ? value : ( value<0 ) ? '-' : '' ),
            gradeAux = this.grade() - index;
        if( gradeAux>1 ) str += '(' + incognite + ')' + '^' + gradeAux;
        else if( gradeAux===1 ) str += '(' + incognite + ')';
        return str;
    }

    toString( incognite ){
        let str = '';
        this.coefficients.forEach( ( value, index ) => str += this.segment( value, index, incognite ) + '\t' );
        return str;
    }
}

class Riemann{
    constructor( equation, errorDelta ){
        this.equation = equation;
        this.errorDelta = errorDelta;
    }

    lessRiemann(){

    }

    moreRiemann(){

    }

    averageRiemann(){
        return ( this.lessRiemann() + this.moreRiemann() ) / 2.0;
    }
}

const eq1 = new Equation( 1, 0 ),
      riemann = new Riemann( eq1, 0.001 );

console.log( eq1.toString( 'X' ) );
console.log( `Riemann result (less): ${ riemann.lessRiemann() }` );
console.log( `Riemann result (more): ${ riemann.moreRiemann() }` );
console.log( `Riemann result (average): ${ riemann.averageRiemann() }` );
