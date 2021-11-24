import ItemEducation from '../ItemEducation';
import {TEducation} from 'Models';
import Typography from '@mui/material/Typography';

const Education = () => {

    const arrayEducation: TEducation[] = [
        {
            universidad: 'UNIVERSIDAD NACIONAL DE GENERAL SARMIENTO',
            titulo: 'LICENCIATURA EN SISTEMAS',
            estado: 'Presente',
            comentario: 'Actualmente promediante el cuarto año.',
        },
        {
            universidad: 'UNIVERSIDAD TECNOLÓGICA NACIONAL',
            titulo: 'TÉCNICO SUPERIOR EN PROGRAMACIÓN',
            estado: 'Finalizada',
            comentario: 'Graduado.',
        },
    ];

return (
    <>
        <Typography>My education </Typography>
        {arrayEducation.map((education: TEducation, i) => (
            <ItemEducation 
                education = {education}
                item = {i}
            />
        ))}
    </>
  );
};

export default Education;
