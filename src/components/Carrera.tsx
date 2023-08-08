import { ICarrera } from "../dtype";
import ItemCarrera from "./ItemCarrera";

interface CarreraProps{
  grupo:string;
  carreras:Array<ICarrera>;
}
const Carrera:React.FC<CarreraProps> = ({
  grupo,
  carreras
}) => {
  return ( 
    <div className="
      max-w-[500px]
      w-full
      md:max-w-[400px]
      xl:max-w-[330px]
      rounded-lg
      p-4
      bg-[rgba(255,255,255,0.9)]
      flex
      flex-col
      gap-2"
      
    >
      <div className="md:text-2xl text-gray-600 text-center border-b-red-400 border-b-4">
        Grupo {grupo}
      </div>

      <div className="flex justify-between items-center ">
        <div className="text-lg text-gray-600 font-bold">Carrera</div>
        <div className="text-lg text-gray-600 font-bold">Total vacantes 2023</div>
      </div>
      {carreras && carreras.map((item)=>
        <ItemCarrera
          key={item.id}
          carrera={item.carrera}
          vacantes={item.vacantes}
        />
      )}
    </div>
   );
}
 
export default Carrera;