import Presentation from './Components/Presentation';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Components/Card';
import ExperienceWork from './Components/ExperienceWork';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MyCV = () => {
    return ( 
    <> 
        <Presentation />
        <Grid container spacing={2}>
            <Grid item xs={6} sx={{ bgcolor: '#cfe8fc', height: '50vh' }}>
                <Item>Lado izquierdo</Item>
                <Card/>
            </Grid>
            <Grid item xs={6} sx={{ bgcolor: '#FFCC1D', height: '50vh' }}>
                <Item>Lado derecho</Item>
                <ExperienceWork/>
            </Grid>
        </Grid>
    </> 
    );
}
 
export default MyCV;