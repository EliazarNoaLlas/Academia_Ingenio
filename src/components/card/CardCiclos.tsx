import React from 'react';
import './CardCiclos.css';
import { Link } from 'react-router-dom';
// Ruta al archivo CSS con los estilos

interface CardCicloProps {
  imagen: string;
  nombre: string;
  subNombre?:string;
  montoPago: string;
  modalidad: string;
  turnos: string;
  inicioCiclo: string;
  mensajeMatriculateYa: string;
  duracion?:string
  precioLuego?:string
}

const CardCiclo: React.FC<CardCicloProps> = ({
  imagen,
  nombre,
  montoPago,
  modalidad,
  turnos,
  inicioCiclo,
  subNombre,
  duracion ='20 horas semanales',
  precioLuego ='900'
}) => {
  return (
    <div className="card-ciclos">
      <img
        src={imagen}
        alt={nombre}
        className='max-w-[100px]'
      />
      <div className='relative'>
        <p className='text-xl font-semibold py-1'>{nombre}</p>
        {
          subNombre && <p className='absolute top-[-12px] right-0 text-sm
        '><i><b>{subNombre}</b></i></p>
        }
        
      </div>
      <div className="inversion">
        <p>
          <span className="currency">S/</span> {montoPago}
        </p>
        <div className="hasta">Hasta el 17 de Julio.</div>
      </div>
      <p>
        <i>Luego S/ {precioLuego}</i>
      </p>
      <div className="divider"></div>
      
      <p>
        <strong>{turnos}</strong>
        <br />
        <strong className="modalidad">{modalidad}</strong>
        <br />
        <strong>T. Mañana de 7am a 1 p.m.</strong>
        <br />
        <strong>T. Tarde de 4pm a 8 p.m.</strong>
        <br />
      </p>
      <div className="divider"></div>
      <p className="inicio">
        <strong>INICIO: {inicioCiclo}</strong>
        <br />
        <i className="duracion">Duración: {duracion}</i>
      </p>
      <div className="
      flex gap-2
      ">
        <Link
          to={'/conocenos#carreras'}
          className="temario ancho_de_boton"
        >
          Carreras y Cursos
        </Link>
        <Link
          to={'/matriculas'}
          className="temario ancho_de_boton"
        >
          Matriculate Ya!!
        </Link>
      </div>
    </div>
  );
};

export default CardCiclo;
