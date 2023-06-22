import React, { useMemo } from 'react';

import { HeroItem } from './HeroItem';
import { getHeroesByPublisher } from '../helpers'

export function HeroList( { publisher = '' } ) {
    const data = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] );

    return (
        <main className="hero-list">
            { data.map( ( hero ) => <HeroItem key={ hero.id } { ...hero } /> ) }
        </main>
    );
}
