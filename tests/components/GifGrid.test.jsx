import  { render, screen } from '@testing-library/react'; 
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Friends';

    test('debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render( <GifGrid category={ category }/> );

        screen.debug();

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText( category ));
    });

    test('debe de mostrar los items cuando se cargan las imagenes de useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Friends',
                url: 'https://localhost/friends.jpg'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={ category }/> );

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});