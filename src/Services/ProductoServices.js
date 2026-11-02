const URL_API = "https://dummyjson.com/products";

 export async function ObtenerProductos() {
    const reponse = await fetch(URL_API);
    if (!reponse .ok) {
        throw new Error ("Error al cargar la data");
    }

    return await reponse.json()

}