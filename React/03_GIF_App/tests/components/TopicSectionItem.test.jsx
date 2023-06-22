import { screen, render, fireEvent } from '@testing-library/react';
import { TopicSectionItem } from '../../src/components/TopicSectionItem';

describe( 'TopicSectionItem component', () => {
    const topic = { title: 'Rammstein', url: 'https://rammstein.com/rammstein.gif' };

    test( 'Snapshot TopicSectionItem component', () => {
        const { container } = render( <TopicSectionItem { ...topic } /> );
        expect( container ).toMatchSnapshot();
    } );

    test( 'Check image container', () => {
        render( <TopicSectionItem { ...topic } /> );
        const { alt, src } = screen.getByRole( 'img' );
        expect( alt ).toBe( topic.title ); 
        expect( src ).toBe( topic.url );
    } );

    test( 'Check image container', () => {
        render( <TopicSectionItem { ...topic } /> );
        // It does not match the alt="title" because it is a property
        expect( screen.getByText( topic.title ) ).toBeTruthy();
    } );
} );
