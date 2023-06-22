import { render, screen, fireEvent } from '@testing-library/react';
import { TopicSection } from '../../src/components/TopicSection';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock( '../../src/hooks/useFetch' );

const gifs = [
    {
        id: 'ASD',
        title: 'ASD',
        url: 'http//localhost:8080/ASD.jpg'
    },
    {
        id: 'QWE',
        title: 'QWE',
        url: 'http//localhost:8080/QWE.jpg'
    }
];

describe( 'TopicSection component', (params) => {
    const topic = 'rammstein';

    test( 'Delete TopicSection button', () => {
        useFetch.mockReturnValue( [] );
        const onDeleteTopic = jest.fn();
        render( <TopicSection topic={ topic } onDeleteTopic={ onDeleteTopic } /> );
        const deleteButton = screen.getByRole( 'button' );
        fireEvent.click( deleteButton );
        expect( onDeleteTopic ).toHaveBeenCalled();
        expect( onDeleteTopic ).toHaveBeenCalledTimes( 1 );
        expect( onDeleteTopic ).toBeCalledWith( topic );
    } );

    test( 'loading images', () => {
        useFetch.mockReturnValue( gifs );
        render( <TopicSection topic={ topic } onDeleteTopic={ () => {} } /> );
        expect( screen.getAllByRole( 'img' ).length ).toBe( 2 );
    } );
} );
