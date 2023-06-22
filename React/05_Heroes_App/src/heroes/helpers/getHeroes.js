import { heroes } from '../data/heroes';

const publishers = [ 'DC Comics', 'Marvel Comics' ];

export const getHeroesByPublisher = ( publisher = '' ) => {
    if( !publishers.includes( publisher ) ) return [];
    return heroes.filter( ( hero ) => hero.publisher === publisher );
};

export const getHeroesByName = ( name = '' ) => {
    if( !name ) return [];
    return heroes.filter( 
        ( hero ) => 
            hero.superhero.toLowerCase().includes( name ) || 
            hero.alter_ego.toLowerCase().includes( name ) ||
            hero.characters.toLowerCase().includes( name )
    );
};

export const getHeroesByID = ( id ) => {
    return heroes.find( ( hero ) => hero.id === id );
};
