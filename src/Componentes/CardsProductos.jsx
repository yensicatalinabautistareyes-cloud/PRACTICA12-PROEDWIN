export default function CardProductos({id,category,name,stock,imageUrl}){
return(
    <article>
        <span>{id}</span>
        <span>{name}</span>
        <img src={imageUrl} />
        <span>{category}</span>
        <span>Stock</span><p>{stock}</p>
    </article>
)
}

