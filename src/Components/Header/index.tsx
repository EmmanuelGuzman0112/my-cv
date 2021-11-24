import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import img_perfil from '../../assets/imagenes/perfil.jpg'

const Header = () => {

    const arrayHeader = ['My cv'];

    return ( 
    <>
        <Stack direction="row" spacing={2}>
            {arrayHeader.map((header) => (
                <div className='div_link' key={header}>
                    <a href={'#' + header}>{header}</a>
                </div>
            ))}
            <Chip
                avatar={<Avatar alt="Emmanuel" src={img_perfil} />}
                label="Avatar"
                variant="outlined"
            />
        </Stack>
        
    </> 
    );
}
 
export default Header;