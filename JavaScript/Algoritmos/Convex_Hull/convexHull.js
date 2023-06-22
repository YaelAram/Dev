/**
 * 
 * @returns { Array }
 */
const createGraph = () => {
    const graph = [];

    for( let i = 0 ; i < 30 ; i++ ){
        const y = [];
        for( let j = 0 ; j < 30 ; j++ ) y.push( ' ' );
        graph.push( y );
    }

    return graph;
}; 

/**
 * 
 * @param { Array } points 
 * @param { Array } path 
 */
const show = ( points, path ) => {
    let graph = createGraph();

    for( const { x, y } of points ) graph[ y ][ x ] = 'o';
    for( const { x, y } of path ) graph[ y ][ x ] = 'X';

    graph = graph.reverse();

    for( const row of graph ){
        let rowStr = '';
        for( const cell of row ) rowStr = rowStr.concat( cell );
        console.log( rowStr );
    }
};

/**
 * 
 * @param { Object } limit 
 * @param { Object } points 
 * @returns { number }
 */
const distancePoint = ( limit, point ) => Math.sqrt( Math.pow( ( limit.x - point.x ), 2 ) + Math.pow( ( limit.y - point.y ), 2 ) );

/**
 * 
 * @param { Array } slopes 
 */
const checkEqualSlopes = ( slopes ) => {
    const firstSlope = slopes.at( 0 );
    const equalSlopes = slopes.filter( ( { slope } ) => slope === firstSlope.slope );

    if( equalSlopes === 1 ) return { newLimit: firstSlope.point, pathAppend: [ firstSlope.point ] };

    const points = equalSlopes
        .map( ( { limit, point } ) => ( { limit, point, d: distancePoint( limit, point ) } ) )
        .sort( ( a, b ) => a.d - b.d )
        .map( ( a ) => {
            return a.point
        } );
    return { newLimit: points.at( -1 ), pathAppend: points };
};

/**
 * 
 * @param { Array } quadrant 
 * @param { Object } reference 
 * @returns { Array }
 */
const computeSlopes = ( quadrant, limit ) => {
    const slopes = [];
    for( const point of quadrant ){
        if( limit.x === point.x && limit.y === point.y ) continue;
        const slope = { limit, point };
        slope.slope = ( limit.x === point.x && limit.y !== point.y ) ?
            ( point.y - limit.y ) * 1_000 :
            ( point.y - limit.y ) / ( point.x - limit.x );
        slopes.push( slope );
    }

    return slopes;
};

/**
 * 
 * @param { Array } quadrant 
 * @param { Array } limits 
 * @param { Function } comparator 
 * @returns 
 */
const connectLimits = ( quadrant, limitA, limitB, comparator ) => {
    if( [ 1, 2 ].includes( quadrant.length ) ) return quadrant;

    const path = [ limitA ];

    while( true ) {
        const slopes = computeSlopes( quadrant, limitA ).sort( comparator );
        const { newLimit, pathAppend } = checkEqualSlopes( slopes );
        path.push( ...pathAppend );
        if( newLimit === limitB ) break;
        quadrant = quadrant.filter( ( point ) => predicatorQuadrant( newLimit, limitB, point ) );
        limitA = newLimit;
    }

    return path;
};

/**
 * 
 * @param { number } index 
 * @returns { Function }
 */
const comparators = ( index ) => {
    const orderASC = ( slope1, slope2 ) => Math.abs( slope1.slope ) - Math.abs( slope2.slope );
    const orderDESC = ( slope1, slope2 ) => Math.abs( slope2.slope ) - Math.abs( slope1.slope );
    if( [ 0, 2 ].includes( index ) ) return orderDESC;
    else return orderASC;
};

/**
 * 
 * @param { Object } param0 
 * @param { Object } param1 
 * @param { Object } param2 
 * @returns { boolean }
 */
const predicatorQuadrant = ( { x: xLimit, y: yLimit }, { x: xNextLimit, y: yNextLimit }, { x: xPoint, y: yPoint } ) => {
    let [ flagX, flagY ] = [ false, false ];
    flagX = ( xLimit < xNextLimit ) ? 
        ( xPoint >= xLimit && xPoint <= xNextLimit ) :
        ( xPoint <= xLimit && xPoint >= xNextLimit );
    flagY = ( yLimit < yNextLimit ) ? 
        ( yPoint >= yLimit && yPoint <= yNextLimit ) :
        ( yPoint <= yLimit && yPoint >= yNextLimit );
    
    return flagX && flagY;
};

/**
 * 
 * @param { Array } points 
 * @param { Object } limit 
 * @param { Object } nextLimit 
 * @returns 
 */
const findQuadrant = ( points, limit, nextLimit ) => {
    return points.filter( ( point ) => predicatorQuadrant( limit, nextLimit, point ) );
}

/**
 * 
 * @param { Array } points 
 * @returns { Array }
 */
const findLimits = ( points ) => {
    const limits = [];
    points.sort( ( a, b ) => a.x - b.x );
    limits[ 0 ] = points.at( 0 );
    limits[ 2 ] = points.at( -1 );
    points.sort( ( a, b ) => a.y - b.y );
    limits[ 3 ] = points.at( 0 );
    limits[ 1 ] = points.at( -1 );

    return limits;
};

/**
 * 
 * @param { Array } points 
 * @returns { Array }
 */
const convexHull = ( points ) => {
    const limits = findLimits( points );
    const path = [];
    limits.forEach( ( limit, index ) => {
        const nextLimit = limits.at( index + 1 ) ?? limits.at( 0 );
        const quadrant = findQuadrant( points, limit, nextLimit );
        const comparator = comparators( index );
        const pathAux = connectLimits( quadrant, limit, nextLimit, comparator );
        path.push( ...pathAux );
    } );

    return Array.from( new Set( path.flat() ) );
};

/**
 * 
 * @returns { number }
 */
 const createRandom = () => Math.round( Math.random() * 25 );

/**
  * 
  * @returns { Object }
  */
const createPoint = () => ( { x: createRandom(), y: createRandom() } );

const main = () => {
    const [ numberOfPoints, points ] = [ 20, [] ];
    for( let index = 0 ; index < numberOfPoints ; index++ ) points.push( createPoint() );
    const path = convexHull( [ ...points ] );
    console.log( 'POINTS:' );
    console.log( points );
    console.log( 'PATH:' );
    console.log( path );

    show( points, path );
};

main();

/**
 * Resultado:
 * POINTS:
 * [
 *   { x: 10, y: 4 },  { x: 2, y: 20 },
 *   { x: 14, y: 8 },  { x: 10, y: 9 },
 *   { x: 14, y: 25 }, { x: 21, y: 11 },
 *   { x: 13, y: 3 },  { x: 9, y: 6 },
 *   { x: 3, y: 14 },  { x: 17, y: 14 },
 *   { x: 3, y: 20 },  { x: 5, y: 23 },
 *   { x: 12, y: 16 }, { x: 16, y: 22 },
 *   { x: 24, y: 24 }, { x: 4, y: 18 },
 *   { x: 8, y: 17 },  { x: 23, y: 6 },
 *   { x: 11, y: 13 }, { x: 4, y: 15 }
 * ]
 * PATH:
 * [
 *   { x: 2, y: 20 },
 *   { x: 5, y: 23 },
 *   { x: 14, y: 25 },
 *   { x: 24, y: 24 },
 *   { x: 23, y: 6 },
 *   { x: 13, y: 3 },
 *   { x: 10, y: 4 },
 *   { x: 3, y: 14 }
 * ]
 * 
 * 
 * 
 * 
 *               X
 *                         X
 *      X
 *                 o
 * 
 *   Xo
 * 
 *     o
 *         o
 *             o
 *     o
 *    X             o
 *            o
 * 
 *                      o
 * 
 *           o
 *               o
 * 
 *          o             X
 * 
 *           X
 *              X
 * 
 * 
 * 
 */
