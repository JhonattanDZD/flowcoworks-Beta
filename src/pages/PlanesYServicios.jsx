import { useTranslation } from "react-i18next";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import imgServicios1 from "../assets/PlanesYServicios/1x/Asset30.png";
import imgServicios2 from "../assets/PlanesYServicios/1x/Asset31.png";
import imgServicios3 from "../assets/PlanesYServicios/1x/Asset32.png";
import imgServicios4 from "../assets/PlanesYServicios/1x/Asset33.png";

import sliderimg1 from "../assets/PlanesYServicios/1x/Asset24.png";
import sliderimg2 from "../assets/PlanesYServicios/1x/Asset25.png";
import sliderimg3 from "../assets/PlanesYServicios/1x/Asset26.png";
import sliderimg4 from "../assets/PlanesYServicios/1x/Asset27.png";

const PlanesYServicios = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* SECCIÓN #3 */}
      <div className="bg-[#F5F6DD]">
        <Header type={"2"} />

        <div className="w-full ">
          <h1 className="text-4xl border text-[#F5F6DD] mb-10  -tracking-[.10em] rounded-full pt-1 pb-4 bg-[#2A4C4D] w-96 mt-20 mx-auto text-center">
            {t("nuestrosPlanes")}
          </h1>
        </div>

        {/* CARD - PLAN NÓMADA */}
        <div className=" rounded-badge bg-[#2A4C4D] grid grid-cols-2 mx-24 ">
          {/* COL 1 */}
          <div className="text-center ml-6 px-5 ">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=+584142530642&text=Hola%20Flowcoworks,%20me%20interesa%20su%20plan%20N%C3%B3mada,%20quiero%20comunicarme%20con%20un%20miembro%20de%20su%20equipo"
            >
              <h1 className="text-7xl hover:font-bold text-[#F5F6DD] mx-auto -tracking-[.10em] mr-10 mt-6 mb-6">
                {t("planNomadaLabel")}
              </h1>
            </a>

            {/* PRECIOS */}
            <div className="grid grid-cols-4 ">
              <div className="text-center leading-1  -tracking-[.10em] text-lg rounded-l-badge border-[#DFE466] border">
                <p className="text-[#DFE466] leading-none">1 DAY PASS</p>
                <p className="text-yellow-50 ">$20</p>
              </div>
              <div className="text-center leading-1  -tracking-[.10em] text-lg  border-[#DFE466] border">
                <p className="text-[#DFE466] leading-none">3 DAY PASS</p>
                <p className="text-yellow-50 ">$50</p>
              </div>
              <div className="text-center leading-1  -tracking-[.10em] text-lg  border-[#DFE466] border">
                <p className="text-[#DFE466] leading-none">1 WEEK PASS</p>
                <p className="text-yellow-50 ">$80</p>
              </div>
              <div className="text-center leading-1  -tracking-[.10em] text-lg rounded-r-badge border-[#DFE466] border">
                <p className="text-[#DFE466] leading-none">1 MONTH PASS</p>
                <p className="text-yellow-50 ">$130</p>
              </div>
            </div>

            <p className="mt-20 w-5/6 mx-auto text-[#DFE466] -tracking-[.10em] leading-5 text-lg">
              {t("planNomadaP1")}
            </p>

            <div className="grid grid-cols-2 mt-12">
              <ul className=" text-left">
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span> {t("planNomadaC1")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span> {t("planNomadaC2")}
                </li>
              </ul>
              <ul className=" text-left">
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span> {t("planNomadaC3")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span> {t("planNomadaC4")}
                </li>
              </ul>
            </div>
          </div>
          <div className="py-10 pr-10">
            <img
              className=" w-[40rem] h-[25rem] rounded-badge"
              src={sliderimg1}
              alt=""
            />
          </div>
        </div>

        {/* CARD - PLAN RESIDENTE */}
        <div className=" rounded-badge bg-[#2A4C4D] grid grid-cols-2 mx-24  mt-14">
          {/* COL 1 */}
          <div className="text-center ml-6  ">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=+584142530642&text=Hola%20Flowcoworks,%20me%20interesa%20su%20Plan%20Residente,%20quiero%20comunicarme%20con%20un%20miembro%20de%20su%20equipo"
            >
              <h1 className="text-7xl hover:font-bold text-[#F5F6DD] mx-auto -tracking-[.10em] mr-10 mt-6 mb-6">
                {t("planResidenteLabel")}
              </h1>
            </a>
            {/* PRECIOS */}
            <p className="text-[#DFE466] rounded-badge border-[#DFE466] border w-40 mx-auto pt-0 pb-1 px-2">
              {t("planResidenteTarifa")}-{" "}
              <span className="text-[#F5F6DD]"> $190</span>
            </p>

            <p className="mt-20 w-5/6 mx-auto text-[#DFE466] -tracking-[.10em] leading-5 text-lg">
              {t("planResidenteP1")}
            </p>

            <div className="grid grid-cols-2 mt-20">
              <ul className=" text-left">
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planResidenteC1")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planResidenteC2")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planResidenteC3")}
                </li>
              </ul>
              <ul className=" text-left">
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planResidenteC4")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planResidenteC5")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planResidenteC6")}
                </li>
              </ul>
            </div>
          </div>
          <div className="py-10 pr-10">
            <img
              className=" w-[40rem] h-[25rem] rounded-badge"
              src={sliderimg2}
              alt=""
            />
          </div>
        </div>

        {/* CARD - PLAN VIRTUAL */}
        <div className=" rounded-badge bg-[#2A4C4D] grid grid-cols-2 mx-24  mt-14">
          {/* COL 1 */}
          <div className="text-center ml-6  ">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=+584142530642&text=Hola%20Flowcoworks,%20me%20interesa%20su%20Plan%20Virtual,%20quiero%20comunicarme%20con%20un%20miembro%20de%20su%20equipo"
            >
              <h1 className="text-7xl hover:font-bold text-[#F5F6DD] mx-auto -tracking-[.10em] mr-10 mt-6 mb-6">
                {t("planVirtualLabel")}
              </h1>
            </a>
            {/* PRECIOS */}
            <p className="text-[#DFE466] rounded-badge border-[#DFE466] border w-40 mx-auto pt-0 pb-1 px-2">
              {t("planVirtualTarifa")}-{" "}
              <span className="text-[#F5F6DD]"> $190</span>
            </p>

            <p className="mt-20 w-5/6 mx-auto text-[#DFE466] -tracking-[.10em] leading-5 text-lg">
              {t("planVirtualP1")}
            </p>

            <div className="grid grid-cols-2 mt-20">
              <ul className=" text-left">
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span> {t("planVirtualC1")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span> {t("planVirtualC2")}
                </li>
              </ul>
              <ul className=" text-left">
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span> {t("planVirtualC3")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span> {t("planVirtualC4")}
                </li>
              </ul>
            </div>
          </div>
          <div className="py-10 pr-10">
            <img
              className=" w-[40rem] h-[25rem] rounded-badge"
              src={sliderimg3}
              alt=""
            />
          </div>
        </div>

        {/* CARD - PLAN ANEXOS */}
        <div className=" rounded-badge bg-[#2A4C4D] grid grid-cols-2 mx-24  mt-14">
          {/* COL 1 */}
          <div className="text-center ml-6  ">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=+584142530642&text=Hola%20Flowcoworks,%20me%20interesa%20su%20Plan%20Anexos,%20quiero%20comunicarme%20con%20un%20miembro%20de%20su%20equipo"
            >
              <h1 className="text-7xl hover:font-bold text-[#F5F6DD] mx-auto -tracking-[.10em] mr-10 mt-6 mb-6">
                {t("planAnexosLabel")}
              </h1>
            </a>
            {/* PRECIOS */}
            <div className="grid grid-cols-2 border rounded-badge border-[#DFE466] w-[30rem] mx-auto">
              <p className="text-[#DFE466]  w-full  border-r border-[#DFE466]   mx-auto pt-0 pb-1 px-2">
                {t("planAnexosTarifa1")}-{" "}
                <span className="text-[#F5F6DD]"> $850</span>
              </p>
              <p className="text-[#DFE466]  border-l border-[#DFE466]  w-full mx-auto pt-0 pb-1 px-2">
                {t("planAnexosTarifa2")}-{" "}
                <span className="text-[#F5F6DD]"> $670</span>
              </p>
            </div>

            <p className="mt-12 w-5/6 mx-auto text-[#DFE466] -tracking-[.10em] leading-5 text-lg">
              {t("planAnexosP1")}
            </p>

            <div className="grid grid-cols-2 mt-5 text-base">
              <ul className=" text-left leading-5 border-r border-[#DFE466]">
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos01C1")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos01C2")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos01C3")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos01C4")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos01C5")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos01C6")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos01C7")}
                </li>
              </ul>
              <ul className=" text-left ml-3 leading-5">
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos01C1")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos0203C2")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos0203C3")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos0203C4")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos0203C5")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos0203C6")}
                </li>
                <li className="text-[#F5F6DD]">
                  <span className="text-[#DFE466]">-</span>{" "}
                  {t("planAnexos0203C7")}
                </li>
              </ul>
            </div>
          </div>
          <div className="py-10 pr-10">
            <img
              className=" w-[40rem] h-[25rem] rounded-badge"
              src={sliderimg4}
              alt=""
            />
          </div>
        </div>

        <div className="w-full ">
          <h1 className="text-4xl border text-[#F5F6DD] mb-10  -tracking-[.10em] rounded-full pt-1 pb-4 bg-[#2A4C4D] w-96 mt-20 mx-auto text-center">
            {t("nuestrosServicios")}
          </h1>
        </div>

        {/* SERVICIO #1 */}
        <div className=" rounded-badge pt-5 pl-10 bg-[#2A4C4D] grid grid-cols-2 mx-24 ">
          <img className="absolute w-56" src={imgServicios1} alt="" />
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=+584142530642&text=Hola%20Flowcoworks,%20me%20interesa%20su%20Servicio%20de%201%20day%20Pass,%20quiero%20comunicarme%20con%20un%20miembro%20de%20su%20equipo"
          >
            <h1 className="text-7xl py-20 hover:font-bold -tracking-[.10em] text-yellow-50 ml-24 bottom-4 relative">
              1 day pass
            </h1>
          </a>

          <div className="flex py-10">
            <p className=" my-auto  text-[#DFE466]">{t("oneDayPass")}</p>
            <p className="border-r border border-[#DFE466] "></p>
            <p className="text-yellow-50 my-auto pb-1 mr-10 ml-20 text-center text-lg w-24 border border-[#DFE466] rounded-badge ">
              $20
            </p>
          </div>
        </div>

        {/* SERVICIO #2 */}
        <div className=" rounded-badge pt-5 pl-10 bg-[#2A4C4D] grid grid-cols-2 mx-24 mt-14">
          <img className="absolute w-56" src={imgServicios2} alt="" />
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=+584142530642&text=Hola%20Flowcoworks,%20me%20interesa%20su%20Servicio%20de%203%20days%20Pass,%20quiero%20comunicarme%20con%20un%20miembro%20de%20su%20equipo"
          >
          <h1 className="text-7xl py-20 hover:font-bold -tracking-[.10em] text-yellow-50 ml-24 bottom-4 relative">
            3 days pass
          </h1>
          </a>

          <div className="flex py-10">
            <p className=" my-auto  text-[#DFE466]">{t("threeDayPass")}</p>
            <p className="border-r border border-[#DFE466] "></p>
            <p className="text-yellow-50 my-auto pb-1 mr-10 ml-20 text-center text-lg w-24 border border-[#DFE466] rounded-badge ">
              $50
            </p>
          </div>
        </div>

        {/* SERVICIO #3 */}
        <div className=" rounded-badge pt-5 pl-10 bg-[#2A4C4D] grid grid-cols-2 mx-24 mt-14">
          <img className="absolute w-56" src={imgServicios3} alt="" />
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=+584142530642&text=Hola%20Flowcoworks,%20me%20interesa%20su%20Servicio%20de%201%20week%20Pass,%20quiero%20comunicarme%20con%20un%20miembro%20de%20su%20equipo"
          >
          <h1 className="text-7xl py-20 hover:font-bold -tracking-[.10em] text-yellow-50 ml-24 bottom-4 relative">
            1 week pass
          </h1>
          </a>

          <div className="flex py-10">
            <p className=" my-auto  text-[#DFE466]">{t("oneWeekPass")}</p>
            <p className="border-r border border-[#DFE466] "></p>
            <p className="text-yellow-50 my-auto pb-1 mr-10 ml-20 text-center text-lg w-24 border border-[#DFE466] rounded-badge ">
              $80
            </p>
          </div>
        </div>

        {/* SERVICIO #4 */}
        <div className=" rounded-badge pt-5 pl-10 bg-[#2A4C4D] grid grid-cols-2 mx-24 mt-14">
          <img className="absolute w-56" src={imgServicios4} alt="" />
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=+584142530642&text=Hola%20Flowcoworks,%20me%20interesa%20su%20Servicio%20de%20flows%20hub,%20quiero%20comunicarme%20con%20un%20miembro%20de%20su%20equipo"
          >
          <h1 className="text-7xl py-20 hover:font-bold -tracking-[.10em] text-yellow-50 ml-24 bottom-4 relative">
            FLOWS HUB
          </h1>
          </a>

          <div className="flex py-10">
            <div className="my-auto">
              <p className=" my-auto  text-[#DFE466]">-{t("flowHubC1")}</p>
              <p className=" my-auto  text-[#DFE466]">-{t("flowHubC2")}</p>
              <p className=" my-auto  text-[#DFE466]">-{t("flowHubC3")}</p>
            </div>
            <p className="border-r border border-[#DFE466] "></p>
            <p className="text-yellow-50 my-auto pb-1 mr-10 ml-20 text-center text-lg w-24 border border-[#DFE466] rounded-badge ">
              $150
            </p>
          </div>
        </div>

        {/* SERVICIO #4 */}
        <div className=" rounded-badge pt-5 pl-10 bg-[#2A4C4D] grid grid-cols-2 mx-24 mt-14">
          <img className="absolute w-56" src={imgServicios1} alt="" />
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=+584142530642&text=Hola%20Flowcoworks,%20me%20interesa%20su%20Servicio%20de%20eventos,%20quiero%20comunicarme%20con%20un%20miembro%20de%20su%20equipo"
          >
          <h1 className="text-7xl py-20 hover:font-bold  -tracking-[.10em] text-yellow-50 ml-24 bottom-4 relative">
            {t("eventsLabel")}
          </h1>
          </a>

          <div className="flex py-10">
            <div className="my-auto">
              <p className=" my-auto  text-[#DFE466]">-{t("eventsC1")}</p>
              <p className=" my-auto  text-[#DFE466]">-{t("eventsC2")}</p>
              <p className=" my-auto  text-[#DFE466]">-{t("eventsC3")}</p>
              <p className=" my-auto  text-[#DFE466]">-{t("eventsC4")}</p>
            </div>
            <p className="border-r border border-[#DFE466] "></p>
            <p className="text-yellow-50 my-auto pb-1 mr-10 ml-20 text-center text-lg w-24 border border-[#DFE466] rounded-badge ">
              $150
            </p>
          </div>
        </div>
      </div>

      <Footer type={"1"} />
    </>
  );
};

export default PlanesYServicios;
