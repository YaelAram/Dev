import React from 'react';
import { render, screen } from "@testing-library/react";
import Welcome from "../../src/components/Welcome";

describe( 'Welcome component', () => {
    const title = 'Hello World';
    const subtitle = 'Goodbye World';
    const message = 123;

    test( '<Welcome /> Snapshot', () => {
        const { container } = render( <Welcome title={ title } subtitle={ subtitle } message={ message }/> );
        expect( container ).toMatchSnapshot();
    } );

    test( '<Welcome /> Contain H1 with title', () => {
        // To watch what is inside screeen use screen.debug()
        render( <Welcome title={ title } subtitle={ subtitle } message={ message }/> );
        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain( title );
    } );

    test( '<Welcome /> Contain H2 with subtitle', () => {
        // To check for 2 or more apperances of the text user getAllByText it returns an array
        render( <Welcome title={ title } subtitle={ subtitle } message={ message }/> );
        expect( screen.getByRole( 'heading', { level: 2 } ).innerHTML ).toContain( subtitle );
    } );

    test( '<Welcome /> Contain p tag with message', () => {
        // To check for 2 or more apperances of the text user getAllByText it returns an array
        render( <Welcome title={ title } subtitle={ subtitle } message={ message }/> );
        expect( screen.getByText( message ).innerHTML ).toContain( String( message ) );
    } );
} );
