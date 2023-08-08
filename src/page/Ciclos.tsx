import CardCiclo from "../components/card/CardCiclos";

const Ciclos = () => {
  return (
    <>
    <div className="
      text-center
      text-3xl
      sm:text-4xl
      md:text-5xl
      font-medium
      text-gray-800
      flex
      items-center
      justify-center
      
    ">
      <div className="
      w-[80%]
      rounded-lg
      p-3
      border-b-rose-500
      border-b-4
      ">
          Ciclos Julio 2023 
      </div>
    </div>
    <div className="mt-2 md:flex-row flex flex-col items-center justify-center gap-5 p-2">
      <CardCiclo
        imagen="po_logo.png"
        nombre="PRIMERA OPORTUNIDAD"
        subNombre="INTERNADO JULIO 2023"
        montoPago="600"
        modalidad="Modalidad: Presencial"
        turnos="Turnos: Mañana y Tarde"
        inicioCiclo="10 y 17 de Julio"
        mensajeMatriculateYa="¡Matricúlate ya!"
        duracion='16 semanas'
        precioLuego='700'

      />
      <CardCiclo
        imagen="cepru_logo.png"
        nombre="PRIMERA OPORTUNIDAD"
        subNombre="PARALELO AL CEPRU 2023"
        montoPago="600"
        modalidad="Modalidad: Presencial"
        turnos="Turnos: Mañana y Tarde"
        inicioCiclo="10 y 17 de Julio"
        mensajeMatriculateYa="¡Matricúlate ya!"
        duracion='16 semanas'
        precioLuego='700'

      />
      
      <CardCiclo
        imagen="ordinario_logo.png"
        nombre="ORDINARIO"
        subNombre="JULIO 2023"
        montoPago="800"
        modalidad="Modalidad: Presencial"
        turnos="Turnos: Mañana y Tarde"
        inicioCiclo="10 y 17 de Julio"
        mensajeMatriculateYa="¡Matricúlate ya!"
        duracion='20 semanas'
        precioLuego='900'
      />
    </div>
  </>
  );
};

export default Ciclos;
