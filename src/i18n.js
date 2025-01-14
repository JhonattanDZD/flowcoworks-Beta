import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';

i18n
    .use(LanguageDetector)
.use(initReactI18next).init({
    debug:true,
    resources: {
        es: {
            translation: {
                inicio: "INICIO",
                nosotros: "NOSOTROS",
                planesYServicios: "PLANES Y SERVICIOS",
                contacto: "CONTACTO",
                ingresar: "INGRESAR",
                seccionInicioTexto1: "IMPULSA TU ÉXITO PROFESIONAL",
                seccionInicioTexto2: "EN FLOW COWORKS, NOS ADAPTAMOS A TUS NECESIDADES PARA CREAR EL AMBIENTE PERFECTO Y QUE FLUYA TU CREATIVIDAD.",
                seccionNosotrosTexto1: "TE OFRECEMOS",
                accesoPrivadoLabel: 'ACCESO PRIVADO',
                accesoPrivadoContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                estacionamientoVIPLabel: 'ESTACIONAMIENTO VIP',
                estacionamientoVIPContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                internetAltaVelocidadLabel: 'INTERNET ALTA VELOCIDAD',
                internetAltaVelocidadContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                accesoBiometricoLabel: "ACCESO BIOMÉTRICO",
                accesoBiometricoContent: "Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam",
                cafeteriaLabel: 'CAFETERÍA',
                cafeteriaContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                recepcionDePaquetesLabel: 'RECEPCIÓN DE PAQUETES',
                recepcionDePaquetesContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                crmLabel: 'CRM',
                crmContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                appYWebLabeL: 'APP Y WEB',
                appYWebContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                nuestrosEspacios: 'NUESTROS ESPACIOS',
                comoPodemosAyudarte: '¿CÓMO PODEMOS AYUDARTE?',
                contactanos: 'CONTÁCTANOS',
                nombreYApellido: 'NOMBRE Y APELLIDO',
                asunto: 'ASUNTO',
                mensaje: 'MENSAJE',
                visitanos: 'VISÍTANOS',
                direccion: 'DIRECCIÓN',
                telefono: 'TELÉFONO',
                email: 'EMAIL',
                acercaDeFlowCoworks: 'ACERCA DE FLOW COWORKS',
                acercaDeFlowCoworksP1: 'Flow Coworks es un innovador espacio de coworking en Caracas, diseñado para emprendedores, freelancers, startups y pequeñas empresas, que promueve un ambiente flexible y colaborativo. ',
                acercaDeFlowCoworksP2: 'Nuestro lema "Conecta, Crea, Fluye" refleja nuestra misión de facilitar conexiones y sinergias entre profesionales, ofreciendo personalización, tecnología avanzada y apoyo integral.',
                acercaDeFlowCoworksP3: 'Fundado en 2023 por emprendedores que identificaron la necesidad de un espacio así, nos diferenciamos por nuestra comunidad sólida y un enfoque personalizado, además de contar con instalaciones funcionales e inspiradoras. Nuestro objetivo es expandir nuestra comunidad, innovar continuamente y ser un referente en la industria del coworking.',
                conecta: 'CONECTA',
                crea: 'CREA',
                fluye: 'FLUYE',
                conoceNuestroEquipo: 'CONOCE NUESTRO EQUIPO',
                nuestrosPlanes: 'NUESTROS PLANES',
                planNomadaLabel: 'PLAN NÓMADA',
                planNomadaP1: 'HOT DESK PARA NÓMADAS DIGITALES. ESPACIO IDEAL PARA TRABAJADORES EN MOVIMIENTO',
                planNomadaC1: 'ESPACIO COMPARTIDO',
                planNomadaC2: 'FLEXIBILIDAD',
                planNomadaC3: '2H INCLUIDAS DE SALA DE REUNIONES (1 MONTH PASS).',
                planNomadaC4: '50 PÁGINAS DE IMPRESIÓN (1 MONTH PASS).',
                planResidenteLabel: 'PLAN RESIDENTE',
                planResidenteTarifa: 'MENSUAL',
                planResidenteP1: 'ESCRITORIO FIJO CON DIRECCIÓN FISCAL INCLUIDA PROPIO ESPACIO DE TRABAJO EN UN ENTORNO COLABORATIVO',
                planResidenteC1: 'PUESTO FIJO.',
                planResidenteC2: 'GAVETERO CON LLAVE.',
                planResidenteC3: '2 INVITACIONES SEMANALES.',
                planResidenteC4: '4H EN LA SALA DE REUNIONES.',
                planResidenteC5: '70 PÁGINAS DE IMPRESIÓN.',
                planResidenteC6: 'DIRECCIÓN FISCAL.',
                planVirtualLabel: 'PLAN VIRTUAL',
                planVirtualTarifa: 'MENSUAL',
                planVirtualP1: 'DOMICILIO FISCAL Y RECEPCIÓN DE PAQUETES LA SOLUCIÓN INTEGRAL PARA DOMICILIOS Y ENTREGAS',
                planVirtualC1: 'DIRECCIÓN FISCAL.',
                planVirtualC2: 'INCLUYE 3 DAY PASS AL MES.',
                planVirtualC3: 'LOCKER CON LLAVE.',
                planVirtualC4: 'RECEPCIÓN DE CORREO Y PAQUETES.',
                planAnexosLabel: 'PLAN ANEXOS',
                planAnexosTarifa1: 'ANEXO 01',
                planAnexosTarifa2: 'ANEXO 02 Y 03',
                planAnexosP1: 'OFICINA PRIVADA PARA PEQUEÑOS EQUIPOS DE 3 O 4 PERSONAS, ESPACIO PROFESIONAL IDEAL CON BENEFICIOS EXCLUSIVOS',
                planAnexos01C1: 'CAPACIDAD DE 4 PERSONAS.',
                planAnexos01C2: 'OFICINA PRIVADA.',
                planAnexos01C3: '5 INVITACIONES SEMANALES.',
                planAnexos01C4: '120 PÁGINAS DE IMPRESIÓN.',
                planAnexos01C5: 'DIRECCIÓN FISCAL.',
                planAnexos01C6: '2 PUESTOS DE ESTAC. VIP.',
                planAnexos01C7: '6H DE SALA DE REUNIONES.',
                planAnexos0203C1: 'CAPACIDAD DE 3 PERSONAS.',
                planAnexos0203C2: 'OFICINA PRIVADA.',
                planAnexos0203C3: '5 INVITACIONES SEMANALES.',
                planAnexos0203C4: '120 PÁGINAS DE IMPRESIÓN.',
                planAnexos0203C5: 'DIRECCIÓN FISCAL.',
                planAnexos0203C6: '1 PUESTO DE ESTAC. VIP.',
                planAnexos0203C7: '6H DE SALA DE REUNIONES.',
                nuestrosServicios: 'NUESTROS SERVICIOS',
                oneDayPass: 'ACCESO AL ÁREA NÓMADA DEL COWORKING POR 1 DÍA.',
                threeDayPass: 'ACCESO AL ÁREA NÓMADA DEL COWORKING POR 3 DÍAS.',
                oneWeekPass: 'ACCESO AL ÁREA NÓMADA DEL COWORKING POR 1 SEMANA.',
                flowHubC1: 'ACCESO A NUESTRA SALA DE REUNIONES POR 1 HORA.',
                flowHubC2: 'CAPACIDAD HASTA 6 PERSONAS.',
                flowHubC3: 'TELEVISIÓN PARA PRESENTAR.',
                eventsLabel: 'EVENTOS',
                eventsC1: 'ESPACIO PARA EVENTOS CON CAFETERÍA Y ACCESO A TERRAZA',
                eventsC2: 'CAPACIDAD HASTA 20 PERSONAS.',
                eventsC3: 'TELEVISIÓN PARA PRESENTAR.',
                eventsC4: '20 PUESTOS DE ESTACIONAMIENTO.',
                footerTerminosYCondiciones: 'TÉRMINOS Y CONDICIONES',
                footerContacto: 'CONTACTO',
            },
        },
        en: {
            translation: {
                inicio: "HOME",
                nosotros: "ABOUT US",
                planesYServicios: "PLANS AND SERVICES",
                contacto: "CONTACT",
                ingresar: "LOGIN",
                seccionInicioTexto1: "BOOST YOUR PROFESSIONAL SUCCESS",
                seccionInicioTexto2: "AT FLOW COWORKS, WE ADAPT TO YOUR NEEDS TO CREATE THE PERFECT ENVIRONMENT AND LET YOUR CREATIVITY FLOW.",
                seccionNosotrosTexto1: "WE OFFER YOU",
                accesoPrivadoLabel: 'PRIVATE ACCESS',
                accesoPrivadoContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                estacionamientoVIPLabel: 'VIP PARKING',
                estacionamientoVIPContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                internetAltaVelocidadLabel: 'HIGH SPEED INTERNET',
                internetAltaVelocidadContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                accesoBiometricoLabel: "BIOMETRIC ACCESS",
                accesoBiometricoContent: "Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam",
                cafeteriaLabel: 'CAFÉ',
                cafeteriaContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                recepcionDePaquetesLabel: 'PACKAGE RECEPTION',
                recepcionDePaquetesContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                crmLabel: 'CRM',
                crmContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                appYWebLabeL: 'APP & WEB',
                appYWebContent: 'Lorem ipsum dolor sitamet, consectetuer adipi- scing elit, sed diam',
                nuestrosEspacios: 'OUR SPACES',
                comoPodemosAyudarte: 'HOW CAN WE HELP YOU?',
                contactanos: 'CONTACT US',
                nombreYApellido: 'NAME AND SURNAME',
                asunto: 'AFFAIR',
                mensaje: 'MESSAGE',
                visitanos: 'VISIT US',
                direccion: 'ADDRESS',
                telefono: 'PHONE',
                email: 'EMAIL',
                acercaDeFlowCoworks: 'ABOUT FLOW COWORKS',
                acercaDeFlowCoworksP1: 'Flow Coworks is an innovative coworking space in Caracas, that promotes a flexible and collaborative environment, designed for entrepreneurs, freelancers, startups and small businesses.',
                acercaDeFlowCoworksP2: 'Our motto "Connect, Create, Flow" reflects our mission to facilitate connections and synergies between professionals, offering customization, advanced technology and comprehensive support.',
                acercaDeFlowCoworksP3: 'Founded in 2023 by entrepreneurs who identified the need for such a space, we differentiate ourselves with our strong community and personalized approach, as well as with functional and inspiring facilities. Our goal is to expand our community, continuously innovate and be a benchmark in the coworking industry.',
                conecta: 'CONNECT',
                crea: 'CREATE',
                fluye: 'FLOW',
                conoceNuestroEquipo: 'MEET OUR TEAM',
                nuestrosPlanes: 'OUR PLANS',
                planNomadaLabel: 'NOMAD PLAN',
                planNomadaP1: 'HOT DESK FOR DIGITAL NOMADS. IDEAL SPACE FOR WORKERS ON THE MOTION',
                planNomadaC1: 'SHARED SPACE',
                planNomadaC2: 'FLEXIBILITY',
                planNomadaC3: '2H MEETING ROOM INCLUDED (1 MONTH PASS).',
                planNomadaC4: '50 PRINTING PAGES (1 MONTH PASS).',
                planResidenteLabel: 'RESIDENT PLAN',
                planResidenteTarifa: 'MONTHLY',
                planResidenteP1: 'FIXED DESK WITH FISCAL ADDRESS INCLUDING OWN WORKSPACE IN A COLLABORATIVE ENVIRONMENT',
                planResidenteC1: 'FIXED POSITION.',
                planResidenteC2: 'DRAWER WITH KEY.',
                planResidenteC3: '2 WEEKLY INVITATIONS.',
                planResidenteC4: '4H IN THE MEETING ROOM.',
                planResidenteC5: '70 PRINTING PAGES.',
                planResidenteC6: 'FISCAL DIRECTION.',
                planVirtualLabel: 'VIRTUAL PLAN',
                planVirtualTarifa: 'MONTHLY',
                planVirtualP1: 'TAX ADDRESS AND PACKAGE RECEIPT THE COMPREHENSIVE SOLUTION FOR ADDRESS AND DELIVERIES',
                planVirtualC1: 'FISCAL DIRECTION.',
                planVirtualC2: 'INCLUDES 3 DAY PASS PER MONTH.',
                planVirtualC3: 'LOCKER WITH KEY.',
                planVirtualC4: 'RECEPTION OF MAIL AND PACKAGES.',
                planAnexosLabel: 'ANNEXES PLAN',
                planAnexosTarifa1: 'ANNEX 01',
                planAnexosTarifa2: 'ANNEX 02 AND 03',
                planAnexosP1: 'PRIVATE OFFICE FOR SMALL TEAMS OF 3 OR 4 PEOPLE, IDEAL PROFESSIONAL SPACE WITH EXCLUSIVE BENEFITS',
                planAnexos01C1: 'CAPACITY OF 4 PEOPLE.',
                planAnexos01C2: 'PRIVATE OFFICE.',
                planAnexos01C3: '5 WEEKLY INVITATIONS.',
                planAnexos01C4: '120 PRINTING PAGES.',
                planAnexos01C5: 'FISCAL DIRECTION.',
                planAnexos01C6: '2 STATION POSITIONS VIP.',
                planAnexos01C7: '6H MEETING ROOM.',
                planAnexos0203C1: 'CAPACITY OF 3 PEOPLE.',
                planAnexos0203C2: 'PRIVATE OFFICE.',
                planAnexos0203C3: '5 WEEKLY INVITATIONS.',
                planAnexos0203C4: '120 PRINTING PAGES.',
                planAnexos0203C5: 'FISCAL DIRECTION.',
                planAnexos0203C6: '1 STATION POSITION VIP.',
                planAnexos0203C7: '6H MEETING ROOM.',
                nuestrosServicios: 'OUR SERVICES',
                oneDayPass: 'ACCESS TO THE NOMAD COWORKING AREA FOR 1 DAY.',
                threeDayPass: 'ACCESS TO THE NOMAD COWORKING AREA FOR 3 DAYS.',
                oneWeekPass: 'ACCESS TO THE NOMAD COWORKING AREA FOR 1 WEEK.',
                flowHubC1: 'ACCESS TO OUR MEETING ROOM FOR 1 HOUR.',
                flowHubC2: 'CAPACITY UP TO 6 PEOPLE.',
                flowHubC3: 'TELEVISION TO PRESENT.',
                eventsLabel: 'EVENTS',
                eventsC1: 'SPACE FOR EVENTS WITH CAFETERIA AND ACCESS TO TERRACE',
                eventsC2: 'CAPACITY UP TO 20 PEOPLE.',
                eventsC3: 'TELEVISION TO PRESENT.',
                eventsC4: '20 PARKING SPOTS.',
                footerTerminosYCondiciones: 'TERMS AND CONDITIONS',
                footerContacto: 'CONTACT',
            },
        },

    }
})