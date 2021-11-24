import Typography from '@mui/material/Typography';
import { FunctionComponent } from 'react';
import {TEducation} from 'Models';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

type Props = {
	education: TEducation,
  item: number,
};

const ItemEducation: FunctionComponent<Props> = (props, {item}) => {

	const {
    universidad,
    titulo,
	  estado,
	  comentario,
	} = props.education;

  return (
    <>
      <Card key= {item}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {universidad}
          </Typography>
          <Typography variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {estado}
          </Typography>
          <Typography variant="body2">
            {comentario}
          </Typography>
        </CardContent>
      </Card>
    <br/>
    </>
  );
};

export default ItemEducation;
