import React from 'react';
import { HeroList } from '../components/HeroList';

export function Marvel() {
    return (
        <section>
            <h1>Marvel Comics</h1>
            <HeroList publisher="Marvel Comics" />
        </section>
    );
};
