import Logo from "../components/Logo";
import Noticia from "../components/Noticia";
import Carrusel from "../components/carrusel/Carrusel";
import SliderHorizontal from "../components/slider/SilderHorizontal";
import { Iingresantes } from "../dtype";
const ingresantes: Array<Iingresantes> = [
  {
    id: 123,
    src:'computo.jpg',
    alt:'ingresante computo general'
  },
  {
    id: 124,
    src:'derecho.jpg',
    alt:'ingresante computo general'
  },
  {
    id: 125,
    src:'medicina.jpg',
    alt:'ingresante computo general'
  },
  {
    id: 126,
    src:'petroquimica.jpg',
    alt:'ingresante computo general'
  },
  {
    id: 127,
    src:'arquitectura.jpg',
    alt:'ingresante computo general'
  }
]
const Home = () => {
  return ( 
    <>
      <Noticia />
      <Carrusel ingresantes={ingresantes} />
      <SliderHorizontal />
      <Logo  card />
    </>
   );
}
 
export default Home;