import { useEffect, useState } from 'react';
import { ObtenerProductos } from '../Services/ProductoServices';
import CardProductos from './CardsProductos';

export default function CatalogoProductos() {
    const [Productos, setProductos] = useState([]);
    useEffect(() => {
        async function listar() {
            const resultado = await ObtenerProductos();
            setProductos(resultado.products);
        }
        listar();
    }, [])
    return (
        <section className='productos-container'>
            {Productos.map(e => <CardProductos
                key={e.id}
                id={e.id}
                name={e.title}
                category={e.category}
                stock={e.stock}
                imageUrl={e.images[0]}
            />)}
        </section>
    )
}

