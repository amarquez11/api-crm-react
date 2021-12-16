import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Formulario from "../components/Formulario"
import Spinner from "../components/Spinner";

const EditarCliente = () => {

    const [cliente, setCliente] = useState({});
    const [cargando, setCargado] = useState(false);

    const {id}= useParams();

    useEffect(() => {

        setCargado(!cargando);
        const obtenerClienteAPI =  async () =>{
            try {
                const url = `http://localhost:4000/clientes/${id}`;
                const respuesta= await fetch(url);
                const resultado = await respuesta.json();
                console.log(resultado);
                setCliente(resultado);
            } catch (error) {
                console.log(error)
            }

            setCargado(false);
        }
        obtenerClienteAPI();
    }, [])

    return (
        <>
        <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
        <p className='mt-3'>Utiliza este formulario para editar los datos de un Cliente</p>

        {cliente?.nombre ? (
            <Formulario
            cliente = {cliente}
            cargando = {cargando}
        />
        ): <p>Cliente Id No Valido</p>}
        
    </>
    )
}

export default EditarCliente
