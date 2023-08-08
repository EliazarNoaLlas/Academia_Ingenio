import { ICarrera } from "../dtype";
import Carrera from "./Carrera";

const grupoA:Array<ICarrera>  =[
  {
    id:0,
    carrera:'Arquitectura',
    vacantes:'122'
  },
  {
    id: 1,
    carrera: 'Ingenieria Elecgrica',
    vacantes: '103'
  },
  {
    id: 2,
    carrera: 'Ingenieria Geologica',
    vacantes: '83'
  },
  {
    id: 3,
    carrera: 'Ingenieria Metalurgica',
    vacantes: '112'
  },
  {
    id: 4,
    carrera: 'Ingenieria de Minas',
    vacantes: '97'
  },
  {
    id: 5,
    carrera: 'Ingenieria Mecanica',
    vacantes: '60'
  },
  {
    id: 6,
    carrera: 'Ingenieria Quimica',
    vacantes: '134'
  },
  {
    id: 7,
    carrera: 'Ingenieria Civil',
    vacantes: '115'
  },
  {
    id: 8,
    carrera: 'Quimica',
    vacantes: '261'
  },
  {
    id: 9,
    carrera: 'Fisica',
    vacantes: '143'
  },
  {
    id: 10,
    carrera: 'Matematica',
    vacantes: '138'
  },
  {
    id: 11,
    carrera: 'Ingenieria informatica y de sistemas',
    vacantes: '83'
  },
  {
    id: 12,
    carrera: 'Ingenieria Agroindustrial (sicuani)',
    vacantes: '110'
  },
  {
    id: 13,
    carrera: 'Ingenieria Electronica',
    vacantes: '72'
  },
  {
    id: 14,
    carrera: 'Ingenieria Petroquimica',
    vacantes: '30'
  },

]
const grupoB: Array<ICarrera> = [
  {
    id: 0,
    carrera: 'Agronomia',
    vacantes: '103'
  },
  {
    id: 1,
    carrera: 'Biologia',
    vacantes: '134'
  },
  {
    id: 2,
    carrera: 'Enfermeria',
    vacantes: '257'
  },
  {
    id: 3,
    carrera: 'Farmacia y bioquimica',
    vacantes: '85'
  },
  {
    id: 4,
    carrera: 'Medicina Humana',
    vacantes: '42'
  },
  {
    id: 5,
    carrera: 'Zootecnia',
    vacantes: '249'
  },
  {
    id: 6,
    carrera: 'Ingenieria Forestal (Puerto Maldonado)',
    vacantes: '112'
  },
  {
    id: 7,
    carrera: 'Odontologia',
    vacantes: '48'
  },
  {
    id: 8,
    carrera: 'Ingenieria Agropecuaria (Andahuaylas)',
    vacantes: '48'
  },
  {
    id: 9,
    carrera: 'Obstetricia (Andahuaylas)',
    vacantes: '110'
  },
  {
    id: 10,
    carrera: 'Ingenieria Agropecuaria (Santo Tomas)',
    vacantes: '112'
  },
  {
    id: 11,
    carrera: 'Ingenieria Veterinaria (Sicuani)',
    vacantes: '143'
  },
  {
    id: 12,
    carrera: 'Ingenieria Veterinaria (Espinar)',
    vacantes: '110'
  },
]
const grupoC: Array<ICarrera> = [
  {
    id: 0,
    carrera: 'Ciencias Administrativas',
    vacantes: '165'
  },
  {
    id: 1,
    carrera: 'Contabilidad',
    vacantes: '195'
  },
  {
    id: 2,
    carrera: 'Economia',
    vacantes: '156'
  },
  {
    id: 3,
    carrera: 'Turismo',
    vacantes: '119'
  },
]
const grupoD: Array<ICarrera> = [
  {
    id: 0,
    carrera: 'Antropologia',
    vacantes: '83'
  },
  {
    id: 1,
    carrera: 'Arqueologia',
    vacantes: '64'
  },
  {
    id: 2,
    carrera: 'Derecho',
    vacantes: '158'
  },
  {
    id: 3,
    carrera: 'Historia',
    vacantes: '159'
  },
  {
    id: 4,
    carrera: 'Ciencias de la comunicacion',
    vacantes: '136'
  },
  {
    id: 5,
    carrera: 'Psicologia',
    vacantes: '90'
  },
  {
    id: 6,
    carrera: 'Filosofia',
    vacantes: '53'
  },
  {
    id: 7,
    carrera: 'Educ. Sec. Matematica y Fisica (Cusco)',
    vacantes: '59'
  },
  {
    id: 8,
    carrera: 'Educ. Sec. Ciencias Naturales (Cusco)',
    vacantes: '72'
  },
  {
    id: 9,
    carrera: 'Educ. Sec. Lengua y Literatura (Cusco)',
    vacantes: '59'
  },
  {
    id: 10,
    carrera: 'Educ. Sec. Ciencias Sociales (Cusco)',
    vacantes: '53'
  },
  {
    id: 11,
    carrera: 'Educ. Sec. Educacion Fisica (Cusco)',
    vacantes: '59'
  },
  {
    id: 12,
    carrera: 'Educacion Primaria (Cusco)',
    vacantes: '59'
  },
  {
    id: 13,
    carrera: 'Educacion Primaria (Canas)',
    vacantes: '108'
  },
  {
    id: 14,
    carrera: 'Educacion Inicial (Canas)',
    vacantes: '108'
  },
  {
    id: 15,
    carrera: 'Educ. Sec. Matematica y Fisica (Espinar)',
    vacantes: '59'
  },
  {
    id: 16,
    carrera: 'Educ. Sec. Ciencias Naturales (Espinar)',
    vacantes: '59'
  },
  {
    id: 17,
    carrera: 'Educacion Primaria (Espinar)',
    vacantes: '59'
  },
  
]
const Carreras = () => {
  return ( 
    <div
      id="carreras"
      className="
      rounded-lg
      mt-5
      bg-[rgba(0,0,0,0.8)]
      w-auto
      mb-3
    ">
      <div className="
        mt-3
        text-center
        text-2xl
        md:text-4xl
        text-gray-200
        font-bold
        p-3
        sm:p-1
      ">
        Carreras y vacantes 2023
      </div>
      <div className="
        rounded-lg
        p-2
        sm:p-6
        flex
        flex-wrap
        items-start
        justify-center
        gap-2
      ">
        <Carrera grupo="A" carreras={grupoA} />
        <Carrera grupo="B" carreras={grupoB} />
        <Carrera grupo="C" carreras={grupoC} />
        <Carrera grupo="D" carreras={grupoD} />
      </div>
      
    </div>
   );
}
 
export default Carreras;