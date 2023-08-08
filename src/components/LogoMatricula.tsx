interface LogoMatriculaProps{
  alt:string;
  src:string;
  onClick:()=>void;
}

const LogoMatricula:React.FC<LogoMatriculaProps> = ({
  onClick,
  src,
  alt
  }) => {
  return ( 
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className="
        w-[50px]
        rounded-xl
        sm:w-[120px]
        md:w-[150px]
        hover:cursor-pointer
        hover:opacity-[0.9]
        mr-5
        "
    />
   );
}
 
export default LogoMatricula;