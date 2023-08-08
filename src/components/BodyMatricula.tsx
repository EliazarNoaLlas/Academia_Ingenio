interface BodyMatriculaProps{
  numero:string;
  tipo:string;
  nombrePropietario:string;
  nombreLabel?:string;
}

const BodyMatricula:React.FC<BodyMatriculaProps> = ({
  numero,
  nombreLabel='Nombre',
  nombrePropietario,
  tipo,
}) => {
  return ( 
    <div className="flex flex-col items-center">
      <div className="text-center text-2xl sm:text-4xl mt-5 font-bold text-gray-600">
        <small>{numero}</small>
      </div>
      <div className="mt-1 text-2xl text-gray-700 font-bold text-center">
        {tipo}
      </div>
      <hr className=" mt-5 w-full border-red-400 border-b-4" />
      <div className="text-center text-2xl sm:text-4xl mt-5 font-bold text-gray-600">
        {nombrePropietario}
      </div>
      <div className=" mt-1 text-2xl text-gray-700 font-bold text-center">
        {nombreLabel}
      </div>
      <small className="text-gray-600 mt-2 text-center">Luego de pagar contactenos al whatsaap</small>
    </div>
   );
}
 
export default BodyMatricula;