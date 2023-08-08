interface CardMediumProps{
  title:string
  body:any
  hidden?:boolean
  complete?:boolean
}

const CardMedium: React.FC<CardMediumProps> = ({
  title,
  body,
  hidden,
  complete
}) => {
  return ( 
    <div
      className={
        `
        bg-gray-700
        bg-opacity-50
        flex
        flex-col
        
        rounded-md
        text-gray-50
        gap-3
        p-3
        ${hidden ? 'hidden' : ''}
        ${hidden ? 'sm:flex' : ''}
        ${complete ? 'sm:w-[100wv]' :'sm:max-w-[50vw]'}
          `
      }
        
    >
      <h2 className="
          text-3xl
          ">{title}
      </h2>
      <div className="
        flex
        flex-col
      ">
        {
          body
        }
      </div>

    </div>
   );
}
 
export default CardMedium;