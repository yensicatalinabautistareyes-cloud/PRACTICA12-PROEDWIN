import {useState, useRef } from "react"

export default function Cronometro(){
   const  [valor,setValor]=useState (0)
   const intervalo = useRef(null);

    function iniciar()
    {   

        intervalo.current = setInterval(
            ()=>{
                setValor((valoranterior)=> valoranterior 
                +1);
            }

        ,1000)

    }

    function detener()
    {
        clearInterval(intervalo.current);
        intervalo.current = null;
    }

    function reiniciar()
    {
        setValor(0);
        clearInterval(intervalo.current);
        intervalo.current = null;
        
    }


    return(
        <>
        <h2>Cronometro</h2>
        <p>{valor}</p>
        <button onClick={iniciar}>Iniciar</button>
        <button onClick={detener}>Detener</button>
        <button onClick={reiniciar}>Reiniciar</button>
        </>
    )
}

