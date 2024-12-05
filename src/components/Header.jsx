import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatarimg from '../assets/Inicio/1x/Asset17.png'


const Header = ({type}) => {
  const estilos = {
    background: "../assets/background.jpg", // Cambia el color aquí
  };
  const { t } = useTranslation();

  return (
    <>
      <div className="pb-20" style={estilos}>
        <div className={`flex fixed shadow-2xl  top-0 ${type == '1' ? 'bg-[#2A4C4D]' : 'bg-[#F5F6DD]'} w-full h-24 justify-between pt-10`}>
          <div className={`text-right fixed z-50  top-[1rem] ${type == '1' ? 'text-yellow-50 hover:text-yellow-100' : 'text-[#2A4C4D]'} transition-all hover:font-bold  text-2xl ml-20 leading-5`}>
            <h3>FLOW</h3>
            <h3>CO-</h3>
            <h3>WORKS</h3>
          </div>

          <nav className={`my-auto fixed z-50 top-30 right-0 ${type == '1' ? 'text-yellow-50' : 'text-[#2A4C4D]'}  text-sm`}>
            <ul className="flex space-x-10 mr-10">
              {" "}
              {/* Clase flex para alineación horizontal y espacio entre los elementos */}
              <li className="border-r-2 py-2 my-auto border-[#DFE466]">
                <Link className={`mr-10 transition-all ${type == '1' ? 'hover:text-white' : null} hover:font-bold`} to="/">
                  {t("inicio")}
                </Link>
              </li>
              <li className="border-r-2 py-2 my-auto border-[#DFE466]">
                <Link className={`mr-10 transition-all ${type == '1' ? 'hover:text-white' : null} hover:font-bold`} to="/aboutUs">
                  {t("nosotros")}
                </Link>
              </li>
              <li className="border-r-2 leading-4  w-28 my-auto border-[#DFE466]">
                <Link className={`mr-10 transition-all ${type == '1' ? 'hover:text-white' : null}  hover:font-bold`} to="/plans">
                  {t("planesYServicios")}
                </Link>
              </li>
              <li className="border-r-2 py-2 my-auto border-[#DFE466]">
                <Link className={`mr-10 transition-all ${type == '1' ? 'hover:text-white' : null} hover:font-bold`} to="/contact">
                  {t("contacto")}
                </Link>
              </li>
              <li className="my-auto">
                <Link
                  className={`mr-10 border-2 px-2 pb-1 ${type == '1' ? 'hover:text-white' : null} rounded-full border-[#DFE466] transition-all hover:font-bold `}
                  to="https://flowcoworks.spaces.nexudus.com/login"
                >
                  {t("ingresar")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <FloatingWhatsApp onClick={console.log('red')} accountName='Flow Coworks' avatar={avatarimg} darkMode chatMessage="Hola, le habla el equipo de Flow Coworks 🤝 En que podemos ayudarle?" placeholder="Consulta tus dudas con nosotros aquí." phoneNumber="+584142530642" />

      <Outlet />
    </>
  );
};

export default Header;
