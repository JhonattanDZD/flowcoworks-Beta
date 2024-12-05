import Header from "../components/Header.jsx";
import art1 from "../assets/Nosotros/1x/artFlecha.png";
import art2 from "../assets/Nosotros/1x/artSeccion2.png";
import { useTranslation } from "react-i18next";
import icon1 from "../assets/Nosotros/1x/Asset20.png";
import icon2 from "../assets/Nosotros/1x/Asset22.png";
import Footer from "../components/Footer.jsx";

// EQUIPO
import profile1 from "../assets/Equipo/Equipo1.jpg";
import profile2 from "../assets/Equipo/Equipo2.jpg";
import profile3 from "../assets/Equipo/Equipo3.jpg";
import profile4 from "../assets/Equipo/Equipo4.jpg";
import profile5 from "../assets/Equipo/Equipo5.jpg";
import profile6 from "../assets/Equipo/Equipo6.jpg";

const Nosotros = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* SECCIÓN #3 */}

      {/* ACERDA DE  */}
      <div className="bg-[#2A4C4D] w-full pt-44">
        <Header type={"1"} />
        <hr className=" border-none" />
        <img className=" absolute w-3/12" src={art2} alt="" />

        <h1 className="text-4xl border text-[#DFE466] mb-14  -tracking-[.10em] rounded-full pt-1 pb-4 bg-[#2A4C4D] w-[33rem]  mx-auto text-center">
          {t("acercaDeFlowCoworks")}
        </h1>

        <p className=" w-4/5 text-justify text-yellow-50 text-[14px] -tracking-[.10em] leading-5 mx-auto">
          {t("acercaDeFlowCoworksP1")}
        </p>

        <p className="mt-5 w-4/5 text-justify text-yellow-50 text-[14px] -tracking-[.10em] leading-5 mx-auto">
          {t("acercaDeFlowCoworksP2")}
        </p>

        <p className="mt-5 w-4/5 text-justify text-yellow-50 text-[14px] -tracking-[.10em] leading-5 mx-auto">
          {t("acercaDeFlowCoworksP3")}
        </p>

        <div className="flex justify-center mt-20">
          <div className="text-center">
            <img className=" w-16" src={icon1} alt="" />
            <p className="text-[#DFE466] mt-7 -tracking-[.10em]">
              {t("conecta")}
            </p>
          </div>
          <div className="mx-24 text-center">
            <img className=" w-16" src={icon2} alt="" />
            <p className="text-[#DFE466] mt-7 -tracking-[.10em]">{t("crea")}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#2A4C4D] border-8 border-[#DFE466]"></div>
            <p className="text-[#DFE466] mt-7 -tracking-[.10em]">
              {t("fluye")}
            </p>
          </div>
        </div>
      </div>

      {/* CONOCE NUESTRO EQUIPO */}
      <div className="bg-[#2A4C4D] w-full  pb-28">
        <hr className=" border-none" />
        <img className="fixed w-3/12" src={art1} alt="" />
        <h1 className="text-4xl border text-[#DFE466] mb-16  -tracking-[.10em] rounded-full pt-1 pb-4 bg-[#2A4C4D] w-[33rem]  mx-auto text-center">
          {t("conoceNuestroEquipo")}
        </h1>

        {/* COLUMNAS DEL EQUIPO */}
        <div className="grid grid-cols-3">
          {/* PERFIL #1 */}
          <div className=" text-center  ">
            <img
              className=" mx-auto w-[8.8rem] rounded-full"
              src={profile1}
              alt=""
            />
            <p className="text-yellow-50 -tracking-[.10em] leading-5 mt-2 text-[18px]">
              NOMBRE Y APELLIDO
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              Cargo
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              CORREO@FLOWCOWORKS.COM
            </p>
          </div>

          {/* PERFIL #2 */}
          <div className=" text-center  ">
            <img
              className=" mx-auto w-[8.8rem] rounded-full"
              src={profile2}
              alt=""
            />
            <p className="text-yellow-50 -tracking-[.10em] leading-5 mt-2 text-[18px]">
              NOMBRE Y APELLIDO
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              Cargo
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              CORREO@FLOWCOWORKS.COM
            </p>
          </div>

          {/* PERFIL #3 */}
          <div className=" text-center  ">
            <img
              className=" mx-auto w-[8.8rem] rounded-full"
              src={profile3}
              alt=""
            />
            <p className="text-yellow-50 -tracking-[.10em] leading-5 mt-2 text-[18px]">
              NOMBRE Y APELLIDO
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              Cargo
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              CORREO@FLOWCOWORKS.COM
            </p>
          </div>

          {/* PERFIL #4 */}
          <div className=" text-center   mt-20">
            <img
              className=" mx-auto w-[8.8rem] rounded-full"
              src={profile4}
              alt=""
            />
            <p className="text-yellow-50 -tracking-[.10em] leading-5 mt-2 text-[18px]">
              NOMBRE Y APELLIDO
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              Cargo
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              CORREO@FLOWCOWORKS.COM
            </p>
          </div>

          {/* PERFIL #5 */}
          <div className=" text-center   mt-20">
            <img
              className=" mx-auto w-[8.8rem] rounded-full"
              src={profile5}
              alt=""
            />
            <p className="text-yellow-50 -tracking-[.10em] leading-5 mt-2 text-[18px]">
              NOMBRE Y APELLIDO
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              Cargo
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              CORREO@FLOWCOWORKS.COM
            </p>
          </div>

          {/* PERFIL #6 */}
          <div className=" text-center   mt-20">
            <img
              className=" mx-auto w-[8.8rem] rounded-full"
              src={profile6}
              alt=""
            />
            <p className="text-yellow-50 -tracking-[.10em] leading-5 mt-2 text-[18px]">
              NOMBRE Y APELLIDO
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              Cargo
            </p>
            <p className="text-[#DFE466] text-sm -tracking-[.10em] leading-4">
              CORREO@FLOWCOWORKS.COM
            </p>
          </div>
        </div>
      </div>
      <Footer type={"2"} />
    </>
  );
};

export default Nosotros;
