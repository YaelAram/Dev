import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

import { getHeroesByID } from '../helpers'

export function SearchHeroById() {
    const { id } = useParams();
    const hero = useMemo( () => getHeroesByID( id ), [ id ] );

    if( !hero ) return <Navigate to="/heroes/" />

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;
    const heroIMG = `/assets/heroes/${ id }.jpg`;
    const navigate = useNavigate();
    const onNavigateBack = () => navigate( `/heroes/${ publisher.split( ' ' ).shift() }` )

    return (
        <section>
            <h1>{ superhero }</h1>
            <div className="image-info">
                <img src={ heroIMG } alt={ superhero } className="hero-img" />
                <article className="hero-info">
                    <p><span className="label-hero-info">Publisher: </span>{ publisher }</p>
                    <p><span className="label-hero-info">Alter Ego: </span>{ alter_ego }</p>
                    <p><span className="label-hero-info">First Apperance: </span>{ first_appearance }</p>
                    { 
                        ( characters !== alter_ego ) ?
                        <p><span className="label-hero-info">Characters: </span>{ characters }</p> :
                        undefined
                    }
                    <input type="button" value="Back" onClick={ onNavigateBack } className="primary-button" />
                </article>
            </div>
        </section>
    );
};
