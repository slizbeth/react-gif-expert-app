import  { render, screen } from '@testing-library/react'; 
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
    const title = 'Friends';
    const url = 'https://friends/friends.jpg';

    test('debe hacer match con el snapshot', ()=> {
        const { container } = render( <GifItem title={title} url={url} /> )
        
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar la imagen con la URL y el ALT indicado', ()=> {
        render( <GifItem title={title} url={url} /> );

        //screen.debug(); // para revisar el objeto de prueba

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('debe mostrar el titulo en el componente', ()=> {
        render( <GifItem title={title} url={url} /> );
        expect( screen.getByText( title )).toBeTruthy();
    });
});