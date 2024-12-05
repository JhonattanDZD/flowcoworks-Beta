import logo1 from "../assets/Inicio/1x/Asset18.png";
import logo2 from "../assets/Inicio/1x/Asset17.png";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "es", lang: "Español" },
];

const Footer = ({type}) => {
  const { i18n, t } = useTranslation();
  const changeLanguageF = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className={`tracking-wide py-10 px-10 ${ type == '1' ? 'bg-[#F5F6DD]' : 'bg-[#2A4C4D]'}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center text-sm opacity-100">
        <div className="dropdown dropdown-top my-auto">
          <div tabIndex={0} role="button" className={`${type == '1' ? 'text-[#2A4C4D]' : 'text-yellow-50'} `}>➤{i18n.language}</div>
          <ul tabIndex={0} className="menu mx-auto dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            {languages?.map((lng) => {
              return (
                <>
                  <button key={lng.code} onClick={() => changeLanguageF(lng.code)} className={`${i18n.language == lng.code ? 'bg-gray-600' : null} text-center mx-auto w-full`}>
                    <img
                      className={`h-8 mx-auto`}
                      src={
                        lng.code == "es"
                          ? `https://img.icons8.com/?size=100&id=ZGEFKpJoPdJQ&format=png&color=000000`
                          : lng.code == "en"
                          ? `https://img.icons8.com/?size=100&id=yzSggttkqLf4&format=png&color=000000`
                          : null
                      }
                      alt=""
                    />
                  </button>
                </>
              );
            })}
          </ul>
        </div>

        <div className="my-auto">
          <h4 className={`${type == '1' ? 'text-[#2A4C4D]' : 'text-yellow-50'}`}>
            {t("footerTerminosYCondiciones")}
          </h4>
        </div>

        <div className="flex-grow text-center mb-4 md:mb-0">
          <img
            src={type == '1' ? logo1 : logo2} // Asegúrate de cambiar esta ruta a la ubicación real de tu logo
            alt="Logo"
            className="h-16 mx-auto" // Ajusta el tamaño del logo aquí
          />
        </div>

        <div className="my-auto">
          <h4 className={`${type == '1' ? 'text-[#2A4C4D]' : 'text-yellow-50'}`} >{t("footerContacto")}</h4>
        </div>

        <div className="my-auto">
          <h4 className={`${type == '1' ? 'text-[#2A4C4D]' : 'text-yellow-50'}`}>
            ALL RIGHTS RESERVED TO FLOW COWORKS
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
