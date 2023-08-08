import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import Logo from "../components/Logo";
import CardMedium from "../components/card/CardMedium";
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import Input from "../components/input/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import axios from "axios";
import { toast } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState:
    {
      errors,
    },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      terminos:false,
      name: '',
      lastName:'',
      email: '',
      dni: '',
      phone: '',
      ciclo: '',
      birthday:''
    }
  });
  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues)=>{
    axios.post('/api/v8/formulario',{
      data:data
    })
    .then(()=>{
      toast.success('Completado exitosamente')
      reset();

    })
    .catch((err)=>{
      toast.error('Error al enviar')
      console.log(err);
      
    })
  }
  const bodyPrimary = (
    <>
      <p>
        Considerando la vigencia del decreto legislativo  N°1390(Restricciones de difusion de publicidad masiva)
        El siguiente formulario es brindarle exclusivamente el envio de publicidad.
      </p>
      <div className="
        mt-2
        flex
        flex-col
        gap-2
        items-center
        justify-center
      ">
        
        <div className="
          flex
          flex-col
          gap-2
          w-10/12
          items-center
          justify-center
          mt-2
          
        ">
          
          <Input
            id='name'
            placeholder="NOMBRE"
            // disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id='lastName' 
            placeholder="APELLIDO"
            // disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id='dni'
            placeholder="DNI"
            // disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id='phone'
            placeholder="CELULAR"
            // disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id='email'
            type="email"
            // disabled={isLoading}
            register={register}
            errors={errors}
            placeholder="CORREO ELECTRONICO"
            required
          />
          <Input
            id='ciclo'
            isSelect
            placeholder="CICLO"
            // disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id='birthday'
            type="date"
            placeholder="Fecha de nacimiento"
            // disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <div>
            <Input
              id='terminos'
              type="checkbox"
              placeholder="TERMINOS"
              // disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <label htmlFor="terminos">Acepto los Términos y Concidiones</label>
          </div>
          <Button label="Enviar" onClick={handleSubmit(onSubmit)} />

        </div>
        
      </div>
    </>
  )
  const bodySecundary = (
    <div className="
      flex
      flex-col
    ">
      <div>
        Si desea conocer de nuestros ciclos o servicios comunicate a nuestro numero
      </div>
      <div>
        CENTRAL TELEFONICA
      </div>
      <div> 
        <b>Teléfono</b>  :  084-650989
      </div>
      <div>
        <b>Celular</b>  :  918- 885917
      </div>
      <div>
        VISITANOS EN:
      </div>
      <div className="
        flex
        gap-3
        items-center
        justify-center
        p-2
        
        ">
        <a href='https://www.facebook.com/profile.php?id=100063746628373'>
          <FaFacebook
            style={{ color: 'white', fontSize: '2.5em' }}
            className='
            border-none 
            bg-blue-700
            rounded-full
            hover:cursor-pointer
            transition-all
          
          '
          />
        </a>
        <a href="https://www.facebook.com/messages/t/1860887030835167"> 
          <FaFacebookMessenger
            style={{ color: 'white', fontSize: '2.5em' }}
            className='
              border-none 
              bg-blue-700
              rounded-full
              hover:cursor-pointer
              transition-all'
          />
        </a>
        <a href="https://wa.me/+51944703256?text=Me%20interesa%20puedes%20darme%20mas%20informacion!!%20">

          <FaWhatsapp
            style={{ color: 'white', fontSize: '2.5em' }}
            className='
              border-none 
              bg-blue-700
              rounded-full
              hover:cursor-pointer
              transition-all
              '
          />
        </a>
      </div>
      <div className="text-center">
        LIBRO DE RECLAMACIONES
      </div>
    </div>
  )

  return ( 
    <div className="
      ">
      <Logo />
      <div className="
        flex
        gap-2
        text-white
        flex-col
        sm:flex-row
        pb-3
      ">
        <CardMedium title="CONTÁCTANOS" body={bodyPrimary} />
        <CardMedium title="INFORMES" body={bodySecundary} complete />
      </div>
    </div>
   );
}
 
export default Contact;