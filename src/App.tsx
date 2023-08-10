import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./page/Home";
import Ciclos from "./page/Ciclos";
import Contact from "./page/Contact";
import NoPage from "./page/NoPage";
import Matricula from "./page/Matricula";
import Conocenos from "./page/Conocenos";
import Internado from "./page/Internado";
import ToasterContext from "./context/ContextToast";
export default function App() {
  return (
  <>
  {/* Aviso -- Datos enviados correctamente */}
    <ToasterContext/>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Layout><Home /></Layout>} />
          <Route path="ciclos" element={<Layout><Ciclos /></Layout>} />
          <Route path="contact" element={<Layout><Contact /></Layout>} />
          <Route path="Matriculas" element={<Layout><Matricula /></Layout>} />
          <Route path="internado" element={<Layout><Internado /></Layout>} />
          <Route path="conocenos" element={<Layout><Conocenos /></Layout>} />
          <Route path="contactos" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={<Layout><NoPage /></Layout>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}