import { useTranslation } from "react-i18next";
import styles from "../estilos/Inicio.module.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

// ICONS
import icon1 from "../assets/Inicio/1x/Asset1.png";
import icon2 from "../assets/Inicio/1x/Asset2.png";
import icon3 from "../assets/Inicio/1x/Asset3.png";
import icon4 from "../assets/Inicio/1x/Asset4.png";
import icon5 from "../assets/Inicio/1x/Asset5.png";
import icon6 from "../assets/Inicio/1x/Asset6.png";
import icon7 from "../assets/Inicio/1x/Asset7.png";
import art1 from "../assets/Inicio/1x/Asset12.png";

// SLIDER IMAGES
import sliderimg1 from "../assets/Inicio/1x/sliderimg1.png";
import sliderimg2 from "../assets/Inicio/1x/sliderimg2.jpg";
import sliderimg3 from "../assets/Inicio/1x/sliderimg3.jpg";
import sliderimg4 from "../assets/Inicio/1x/sliderimg4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Inicio = () => {
  const { i18n, t } = useTranslation();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* SECCIÓN INICIO (FOTO) */}
      <div className={styles.fondo}>
        <Header type={'1'} />
        <h1
          className={` leading-tight -tracking-[.10em] text-6xl ${
            i18n.language == "en" ? "w-8/12" : "w-6/12"
          } text-[#DFE466] mt-96 bottom-0 left-0 mb-4 ml-16`}
        >
          {t("seccionInicioTexto1")}
        </h1>
        <p className="leading-normal text-white w-5/12 text-center text-sm  bottom-0 left-0 mb-4 ml-12">
          {t("seccionInicioTexto2")}
        </p>
      </div>

      {/* SECCIÓN #2 */}
      <div className="bg-[#F5F6DD] w-full pb-56">
        <hr className="mt-24" />
        <img className="absolute" src={art1} alt="" />
        <h1 className="text-4xl text-[#F5F6DD] mb-28  -tracking-[.10em] rounded-full pt-1 pb-4 bg-[#587E9A] w-80 mt-20 mx-auto text-center">
          {t("seccionNosotrosTexto1")}
        </h1>

        {/* Columnas */}
        <div className="grid grid-cols-4">
          {/* CARD 1 */}
          <div className=" text-center">
            <img src={icon1} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#587E9A] font-bold mt-3">
              {t("accesoPrivadoLabel")}
            </h3>
            <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("accesoPrivadoContent")}
            </p>
          </div>
          <div className=" text-center">
            <img src={icon2} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#587E9A] font-bold mt-3">
              {t("estacionamientoVIPLabel")}
            </h3>
            <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("estacionamientoVIPContent")}
            </p>
          </div>
          <div className=" text-center">
            <img src={icon3} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#587E9A] font-bold mt-3">
              {t("internetAltaVelocidadLabel")}
            </h3>
            <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("internetAltaVelocidadContent")}
            </p>
          </div>
          <div className=" text-center">
            <img src={icon4} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#587E9A] font-bold mt-3">
              {t("accesoBiometricoLabel")}
            </h3>
            <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("accesoBiometricoContent")}
            </p>
          </div>
          <div className=" mt-20 text-center">
            <img src={icon5} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#587E9A] font-bold mt-3">
              {t("cafeteriaLabel")}
            </h3>
            <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("cafeteriaContent")}
            </p>
          </div>
          <div className=" mt-20 text-center">
            <img src={icon6} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#587E9A] font-bold mt-3">
              {t("recepcionDePaquetesLabel")}
            </h3>
            <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("recepcionDePaquetesContent")}
            </p>
          </div>
          <div className=" mt-16 text-center">
            <div className="w-16 h-16 border-2 border-[#DFE466] rounded-full mx-auto"></div>
            <h3 className="textl-lg text-[#587E9A] font-bold mt-3">
              {t("crmLabel")}
            </h3>
            <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("crmContent")}
            </p>
          </div>
          <div className=" mt-20 text-center">
            <img src={icon7} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#587E9A] font-bold mt-3">
              {t("appYWebLabeL")}
            </h3>
            <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("appYWebContent")}
            </p>
          </div>
        </div>
      </div>

      {/* SECCIÓN #3 */}
      <div className="bg-[#2A4C4D] w-full pb-56">
        <hr className="" />
        <img className="absolute" src={art1} alt="" />
        <h1 className="text-4xl border text-[#DFE466] mb-10  -tracking-[.10em] rounded-full pt-1 pb-4 bg-[#2A4C4D] w-96 mt-20 mx-auto text-center">
          {t("nuestrosEspacios")}
        </h1>

        {/* SLIDER */}
        <Slider {...settings}>
          <div className="">
            <img
              className="mx-auto w-11/12 h-[35rem]"
              src={sliderimg1}
              alt=""
            />
          </div>
          <div>
            <img
              className="mx-auto w-11/12 h-[35rem]"
              src={sliderimg2}
              alt=""
            />
          </div>
          <div>
            <img
              className="mx-auto w-11/12 h-[35rem]"
              src={sliderimg3}
              alt=""
            />
          </div>
          <div>
            <img
              className="mx-auto w-11/12 h-[35rem]"
              src={sliderimg4}
              alt=""
            />
          </div>
        </Slider>
      </div>

      <Footer type={"2"} />
    </>
  );
};

export default Inicio;
