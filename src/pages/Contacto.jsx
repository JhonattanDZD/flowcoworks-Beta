import Header from "../components/Header.jsx";
import art1 from "../assets/Nosotros/1x/artFlecha.png";
import { useTranslation } from "react-i18next";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const Contacto = () => {
    const { t } = useTranslation();
 
    return (
    <>
     {/* SECCIÓN #3 */}
     <div className="relative bg-[#2A4C4D]">
        <Header type={"1"} />
        {/* Imagen de fondo */}
        <img className="absolute inset-0 z-0" src={art1} alt="" />

        {/* Contenedor del formulario */}
        <div className="relative z-10">
          {" "}
          {/* Asegúrate de que este contenedor tenga un z-index mayor */}
          <h1 className="text-4xl border text-[#DFE466] mb-10 -tracking-[.10em] rounded-full pt-1 pb-4 bg-[#2A4C4D] w-[33rem] mt-20 mx-auto text-center">
            {t("comoPodemosAyudarte")}
          </h1>
          <div className="grid grid-cols-2">
            {/* COL 1 */}
            <div className="border-r-2 border-[#DFE466]">
              <h3 className="text-xl -tracking-[.10em] text-yellow-50 text-center">
                {t("contactanos")}
              </h3>

              {/* NOMBRE Y APELLIDO */}
              <div className="w-full mx-auto max-w-[30rem]">
                <div className="flex mt-10 py-2 w-6/4 ">
                  <label className="text-[#DFE466]" htmlFor="">
                    {t("nombreYApellido")} -{" "}
                  </label>
                  <input
                    className="appearance-none bg-transparent border-b border-[#DFE466] w-full text-yellow-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Nombre"
                  />
                </div>
              </div>

              {/* ASUNTO */}
              <div className="w-full mx-auto max-w-[30rem]">
                <div className="flex mt-10 py-2">
                  <label className="text-[#DFE466] w-48" htmlFor="">
                    {t("asunto")} -
                  </label>
                  <input
                    className="appearance-none bg-transparent border-b border-[#DFE466] w-full text-yellow-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="asunto del mensaje"
                  />
                </div>
              </div>

              {/* MENSAJE */}
              <div className="w-full mx-auto max-w-[30rem]">
                <div className="flex mt-10 py-2">
                  <label className="text-[#DFE466] w-48" htmlFor="">
                    {t("mensaje")} -
                  </label>
                  <textarea
                    placeholder="Estamos a la orden para cualquier inquietud o consulta!"
                    className="text-justify -tracking-[.15em] min-h-40 max-h-40 h-40 appearance-none bg-transparent border-b border-[#DFE466] w-full text-yellow-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* COL 2 */}
            <div>
              <h3 className="text-xl -tracking-[.10em] text-yellow-50 text-center">
                {t("visitanos")}
              </h3>

              {/* DIRECCION */}
              <div className="w-full mx-auto max-w-[30rem]">
                <div className="flex items-center py-2 w-6/4 ">
                  <label className="text-[#DFE466] w-96" htmlFor="">
                    {t("direccion")} -{" "}
                  </label>
                  <p className="text-white mt-5">
                    AV. FRANCISCO DE MIRANDA CON 2DA AV. DE CAMPO ALEGRE, EDIF.
                    TORRE LA PRIMERA, PISO 2, OF. B Y C, URB. CAMPO ALEGRE,
                    CARACAS
                  </p>
                </div>
              </div>

              <div className="w-[30rem] h-[20rem] rounded mx-auto">
                <APIProvider apiKey={"AIzaSyA26ssUVPmwlk1c2YiX5fOy1ZGcOhFI5AM"}>
                  <Map
                    defaultZoom={15}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    defaultCenter={{
                      lat: 10.492001398907416,
                      lng: -66.8630958306861,
                    }}
                  >
                    <Marker
                      position={{
                        lat: 10.492001398907416,
                        lng: -66.8630958306861,
                      }}
                      label={"Flow Coworks"}
                    />
                  </Map>
                </APIProvider>
              </div>
            </div>
          </div>
          <div className="flex mt-12 justify-center">
            {/* TELÉFONO */}
            <div className="flex ml-20">
              <p className="text-[#DFE466]">{t("telefono")}</p>{" "}
              <p className="mx-2 text-[#DFE466]">-</p>{" "}
              <p className="text-white">0414-2530642</p>
            </div>

            {/* EMAIL */}
            <div className="flex ml-20">
              <p className="text-[#DFE466]">{t("email")}</p>{" "}
              <p className="mx-2 text-[#DFE466]">-</p>{" "}
              <p className="text-white">VENTAS@FLOWCOWORKS.COM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacto