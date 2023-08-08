import { Link } from "react-router-dom";

interface Noticia{
  texto:string
}

const Noticia = () => {
  return ( 
    <div
      className="
        w-full
        bg-[rgba(255,255,255,0.8)]
        p-2
        rounded-lg
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          text-xl
          md:text-2xl
          xl:text-4xl
          font-semibold
          text-center
          text-gray-700
        "
      >
        Las matriculas de <b>Julio 2023</b> ya iniciaron !!  
      </div>
      <Link
        to={'/ciclos'}
        className="
          ml-3
          py-2
          px-4
          md:py-3
          md:px-5
          bg-red-500
          rounded-xl
          text-gray-100
          hover:bg-red-400
          text-xl
        "
      >
        Quiero ver mas
      </Link>
    </div>
   );
}
 
export default Noticia;