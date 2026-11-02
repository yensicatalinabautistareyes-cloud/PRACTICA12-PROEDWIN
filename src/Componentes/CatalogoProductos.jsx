import { useEffect, useState } from 'react';
import { ObtenerProductos } from '../Services/ProductoServices';
import CardProductos from './CardsProductos';

export default function CatalogoProductos(){
    const [Productos,setProductos] = useState([]);
    useEffect (() =>{
            async function listar() {
                const resultado = await ObtenerProductos();
                setProductos(resultado.data);
            }
            listar();
        },[])
    return(
        <section className='productos-container'>
            {Productos.map(e => <CardProductos
                id = {e.id}
                name = {e.name}
                category = {e.category}
                stock = {e.stock}
                imageUrl = {e.imageUrl}
            />)}
        </section>
    )
}
/*Productos.map(e => <h3>{e.name}</h3>)*/
