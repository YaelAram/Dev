import React, { useMemo, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Alert, SearchBar } from '../../ui';
import { HeroItem } from '../components/HeroItem';
import { getHeroesByName } from '../helpers';

export function SearchHeroByName() {
    const navigate = useNavigate();
    const location = useLocation(); 

    const handleSearch = useCallback( ( searchText ) => navigate( `?q=${ searchText }` ) );
    const heroSearch = useMemo( () => ( new URLSearchParams( location.search ).get( 'q' ) ?? '' ), [ location ] );

    const heroes = useMemo( () => getHeroesByName( heroSearch ), [ heroSearch ] );

    return (
        <section>
            <h1>Search Hero</h1>
            <SearchBar handleSearch={ handleSearch } init={ heroSearch }/>
            {
                ( !heroSearch ) ? undefined :
                    ( heroes.length ) ? 
                        ( 
                            <div className="hero-list">
                                { heroes.map( ( hero ) => <HeroItem key={ hero.id } { ...hero } /> ) }
                            </div>
                        ) :
                        <Alert name={ heroSearch } />
            }
        </section>
    );
};
