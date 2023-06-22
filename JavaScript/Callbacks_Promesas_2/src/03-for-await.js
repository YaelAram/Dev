import { heroes } from "./heroes";

export const asyncFor = async () => {
    const idList = heroes.map( ( { id } ) => id );
    for await( const hero of getHeroes( idList ) ) console.log( hero.name );
};

/**
 * 
 * @param { Array<String> } idList 
 * @returns { Array<Promise> }
 */
const getHeroes = ( idList ) => idList.map( ( id ) => getHeroe( id ) );

/**
 * 
 * @param { string } id 
 * @returns { Promise<Object> }
 */
const getHeroe = async ( id ) => heroes.find( ( heroe ) => heroe.id === id );
