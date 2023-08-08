import Carreras from "../components/Carreras";
import Carrusel from "../components/carrusel/Carrusel";
import { Iingresantes } from "../dtype";

const docentes: Array<Iingresantes> = [
  {
    id: 1,
    src: 'docentes/docente1.png',
    alt: 'docente1'
  },
  {
    id: 2,
    src: 'docentes/docente2.png',
    alt: 'docente2'
  },
  {
    id: 3,
    src: 'docentes/docente3.png',
    alt: 'docente3'
  },
  {
    id: 4,
    src: 'docentes/docente4.png',
    alt: 'docente4'
  },
  {
    id: 5,
    src: 'docentes/docente5.png',
    alt: 'docente5'
  },
  {
    id: 6,
    src: 'docentes/docente6.png',
    alt: 'docente6'
  },
  {
    id: 7,
    src: 'docentes/docente7.png',
    alt: 'docente7'
  },
  {
    id: 8,
    src: 'docentes/docente8.png',
    alt: 'docente8'
  },
  {
    id: 9,
    src: 'docentes/docente9.png',
    alt: 'docente9'
  },
  {
    id: 10,
    src: 'docentes/docente10.png',
    alt: 'docente10'
  },
  {
    id: 11,
    src: 'docentes/docente11.png',
    alt: 'docente11'
  },
  {
    id: 12,
    src: 'docentes/docente12.png',
    alt: 'docente12'
  },
  {
    id: 13,
    src: 'docentes/docente13.png',
    alt: 'docente13'
  },
  {
    id: 14,
    src: 'docentes/docente14.png',
    alt: 'docente14'
  },
  {
    id: 15,
    src: 'docentes/docente15.png',
    alt: 'docente15'
  },
  {
    id: 16,
    src: 'docentes/docente16.png',
    alt: 'docente16'
  },
  {
    id: 17,
    src: 'docentes/docente17.png',
    alt: 'docente17'
  },
  {
    id: 18,
    src: 'docentes/docente18.png',
    alt: 'docente18'
  },
  {
    id: 19,
    src: 'docentes/docente19.png',
    alt: 'docente19'
  },
  {
    id: 20,
    src: 'docentes/docente20.png',
    alt: 'docente20'
  },
  {
    id: 21,
    src: 'docentes/docente21.png',
    alt: 'docente21'
  },
  {
    id: 22,
    src: 'docentes/docente22.png',
    alt: 'docente22'
  },
]
//public\docentes\docente1.png  
const Conocenos = () => {
  return (<>
  <div className="bg-[rgba(255,255,255,0.6)] rounded-lg py-5">
    <div className="text-3xl text-gray-800 font-bold text-center mb-6">
      Nuestros Docentes
    </div>
    <hr className="mt-5 border-blue-400 border-b-4" />

      <Carrusel ingresantes={docentes} isMaxItems idDocentes />
    
    <hr className="mt-5 border-blue-400 border-b-4" />
      <p
        className="
      pt-2
      sm:text-3xl
      text-2xl
      text-center
      text-red-800
      font-bold
    "
      >
        Especialistas en tu preparacion
      </p>
      <p
        className="
        text-xl
        sm:text-2xl
        text-center
        text-gray-800
        font-bold
      "
      >
        Confia en los mejores!!
      </p>
  </div>
  <Carreras />
  </>
   );
}
 
export default Conocenos;