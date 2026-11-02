const URL_API = "http://localhost:3000/api/products";

 export async function ObtenerProductos() {
    const reponse = await fetch(URL_API);
    if (!reponse .ok) {
        throw new Error ("Error al cargar la data");
    }

    return await reponse.json()

}