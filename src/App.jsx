import "./i18n.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import Inicio from "./pages/Inicio.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Planes from "./pages/PlanesYServicios.jsx";
import Contacto from "./pages/Contacto.jsx";
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/aboutUs" element={<Nosotros />} />
        <Route path="/plans" element={<Planes />} />
        <Route path="/contact" element={<Contacto />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <>
  //   <LanguageSelector />
  //     <p>{t("inicio")}</p>
  //   </>
  // )
};

export default App;
