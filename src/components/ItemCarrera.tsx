interface ItemCarreraProps{
  carrera:string;
  vacantes:string;
}

const ItemCarrera:React.FC<ItemCarreraProps> = ({
  carrera,
  vacantes
}) => {
  return ( 
    <div className="flex justify-between items-center gap-x-3">
      <div className="
        text-lg
        text-gray-600
        truncate
        xl:max-w-[190px]
        md:max-w-[220px]
        max-w-[330px]"
      >
        {carrera}
      </div>
      <div className="text-lg text-gray-600 font-light">{vacantes}</div>
    </div>
   );
}
 
export default ItemCarrera;