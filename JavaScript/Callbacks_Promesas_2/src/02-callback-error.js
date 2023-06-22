import { heroes } from './heroes';

export const findHeroCallback = () => {
    const id = '5d86371fd55e2e2a30fe1ccb1';
    findHero( id, ( error, hero ) => {
        if( error ) {
            console.error( error );
            return;
        }
        console.log( hero.name );
    } );
};

/**
 * 
 * @param { string } id 
 * @param { ( error:? string, hero: Object ) => void } callback 
 */
const findHero = ( id, callback ) => {
    const hero = heroes.find( ( hero ) => hero.id === id );
    if( !hero ) {
        callback( `Hero with ID: ${ id } not found` );
        return;
    }
    callback( null, hero );
};
