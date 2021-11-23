import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FunctionComponent } from 'react';
import {Experience} from 'Models';

type Props = {
	experience: Experience,
  item: number,
};

const ItemExperienceWork: FunctionComponent<Props> = (props, {item}) => {

	const {
    tituloPuesto,
    empresa,
    desde,
    hasta,
    descripcion,
	} = props.experience;

  return (
    <>
      <Accordion key= {item}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{tituloPuesto}</Typography>
          <Typography>{empresa} | {desde} - {hasta}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {descripcion}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ItemExperienceWork;
