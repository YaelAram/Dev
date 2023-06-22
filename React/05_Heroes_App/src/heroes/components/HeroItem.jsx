import React from 'react';

import { Link } from 'react-router-dom';

export function HeroItem( { id, superhero, publisher, alter_ego, first_appearance, characters } ) {
    const heroIMG = `/assets/heroes/${ id }.jpg`;

    return (
        <article className="hero-item">
            <h3>{ `${ superhero } - ${ publisher }` }</h3>
            <div className="image-info">
                <img src={ heroIMG } alt={ superhero } />
                <div className="hero-info">
                    <p><span className="label-hero-info">Alter Ego: </span>{ alter_ego }</p>
                    <Link to={ `/heroes/hero/${ id }` } className="about-hero-info">More...</Link>
                </div>
            </div>
        </article>
    );
}
