import ItemExperienceWork from '../ItemExperienceWork';
import {TExperience} from 'Models';
import Typography from '@mui/material/Typography';

const ExperienceWork = () => {

    const arrayExperience: TExperience[] = [
        {
            tituloPuesto: 'DESARROLLADOR DE BASE DE DATOS SQL SERVER',
            empresa: 'HASAR SISTEMAS',
            desde: 'Enero de 2020',
            hasta: 'Presente',
            descripcion: 'Encargado de la integracion de la aplicacion <br> Ruta40 con los ERPs de los clientes. Proyecto Vicepresidencia de Alimentos con ERP SAP y Proyecto The coca-cola bottiling company con ERP BASIS (AS400). Para lograr el proyecto utilizo las herramientas: SQL server, SSIS, SSDT, Apache Nifi, API Rest con herramientas de gestion Azure DevOps.',
        },
        {
            tituloPuesto: 'DESARROLLADOR REACT',
            empresa: 'HASAR SISTEMAS',
            desde: 'Junio de 2021',
            hasta: 'Presente',
            descripcion: 'Desarrollo del front-end para el proyecto Coca-Cola Femsa. Utilizo herramientas como ReactJs y TypeScript para el manejo del dom, Redux para el almacenamiento, MaterialUI como libreria de componentes y Cypress para el testing end-to-end.',
        },
        {
            tituloPuesto: 'ANALISTA DESARROLLADOR PL/SQL Y ETL IPC',
            empresa: 'ATOS',
            desde: 'Enero de 2019',
            hasta: 'Diciembre de 2020',
            descripcion: 'Optimización y creación de Procesos PL/SQL, procedure, packages y triggers. Análisis de problemas, seguimiento y resolución de incidentes en producción. Creación y seguimiento de Jobs',
        },
        {
            tituloPuesto: 'ANALISTA DESARROLLADOR PL/SQL',
            empresa: 'CITI BANK',
            desde: 'Noviembre de 2016',
            hasta: 'Diciembre de 2018',
            descripcion: 'Análisis, diseño, desarrollo, automatización y optimización de procesos en base de datos y Shell Scripting. Optimización de procesos para reportes. Utilización de herramientas de desarrollo tales como Toad, SQL Developer. Putty para el desarrollo en Shell Scripting.',
        },
        {
            tituloPuesto: 'DESARROLLADOR PL/SQL | DESARROLLADOR HP EXSTREAM',
            empresa: 'SOFRECOM ARGENTINA SA',
            desde: 'Julio de 2015',
            hasta: 'Octubre de 2016',
            descripcion: 'Análisis, diseño, desarrollo, automatización y optimización de procesos en base de datos y Shell Scripting. Desarrollo en la plataforma de reporteria HP Exstream.',
        },
    ];

return (
    <>
        <Typography>My work experience </Typography>
        {arrayExperience.map((experience: TExperience, i) => (
            <ItemExperienceWork 
                experience = {experience}
                item = {i}
            />
        ))}
    </>
  );
};

export default ExperienceWork;
