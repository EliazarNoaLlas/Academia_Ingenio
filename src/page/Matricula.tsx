import { useState } from "react";
import LogoMatricula from "../components/LogoMatricula";
import BodyMatricula from "../components/BodyMatricula";
enum bodySelect{
  yape=1,
  cajaCusco =2,
  bcp=3,
  bancoNacion =4,
}

const Matricula = () => {
  const [isActiveSelect, setIsActiveSelect] = useState(false);
  const [itemSelect, setItemSelect] = useState(bodySelect.yape);
  const handleOnClick=(value:number)=>{
    setItemSelect(value)
    setIsActiveSelect(true)
  }
  let bodyDetails = (
    <BodyMatricula
      nombrePropietario="931-063913"
      numero="084-320989"
      tipo="Telefono"
      nombreLabel="Yape"
      />
  )

  if (itemSelect === bodySelect.cajaCusco){
    bodyDetails =(
      <BodyMatricula
        nombrePropietario=""
        numero="106-11-2321000578941"
        tipo="CAJA CUSCO"
        nombreLabel=""
      />

    )
  }
  if (itemSelect === bodySelect.bcp) {
    bodyDetails = (
      <BodyMatricula
        nombrePropietario="285-98189728-0-08"
        numero=" 002-28519818972800857"
        tipo="CCI"
        nombreLabel="BCP"
      />
    )
  }
  if (itemSelect === bodySelect.bancoNacion) {
    bodyDetails = (
      <BodyMatricula
        nombrePropietario=""
        numero="04-171475738"
        tipo="BANCO DE LA NACION"
        nombreLabel=""
      />
    )
  }
  

  return (
  <>
    <div className="
      flex flex-col justify-center items-center bg-[rgba(255,255,255,0.6)] rounded-md
      p-[18px]
    ">
      <div className="text-3xl font-bold text-gray-700">
        MATRICULAS
      </div>
    </div>
    <div className="
      flex flex-col justify-center items-center bg-[rgba(255,255,255,0.6)] rounded-md
      p-[18px] mt-4
    ">  
        <div className="text-xl text-gray-700 text-center">
          Elegir una forma de pago
        </div>
        <div className="flex flex-row sm:p-[16px] p-[10px]">
          <LogoMatricula
            src="pagos/yape.png"
            alt="Logo yape"
            onClick={() => handleOnClick(bodySelect.yape)}
          />
          <LogoMatricula
            src="pagos/caja_cusco.jpg"
            alt="Logo caja cusco"
            onClick={() => handleOnClick(bodySelect.cajaCusco)}
          />
          <LogoMatricula
            src="pagos/bcp.png"
            alt="Logo bcp"
            onClick={() => handleOnClick(bodySelect.bcp)}
          />
          <LogoMatricula
            src="pagos/banco_nacion.png"
            alt="Logo banco de la nacion"
            onClick={() => handleOnClick(bodySelect.bancoNacion)}
          />
        </div>
    </div>
    <div className="
      flex flex-col justify-center items-center bg-[rgba(255,255,255,0.6)] rounded-md
      p-[18px] mt-4
    ">
      {isActiveSelect
          ? <div className="p-[15px] text-xl text-gray-700">
              <div className="text-black">
              {bodyDetails}
              </div>
          </div>
          : <div className="p-[15px] text-xl text-gray-700" >
              Selecciona una forma de pago
            </div>
      }
    </div>
  </>
   );
}
 
export default Matricula;