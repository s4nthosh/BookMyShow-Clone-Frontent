import React from 'react'
import Logo from '../../components/svgs/Logo'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { InputBase , Button } from '@mui/material';

import OrderSummary from './OrderSummary';




const Payment=()=>{
  

  return (
    <div className='bg-primary w-full h-screen'>
      <header className='w-full h-14 flex items-center bg-white'>
        <div className='logo w-full md:w-28'>
            <span className='hidden md:block'><Logo/></span>
            <span className='w-full text-black md:hidden'>Conform Booking</span>
        </div>
      </header>

      <div className='w-full md:flex mt-4'>
        <div className='hidden md:block Details w-2/3 h-full'>
        <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
          sx={{backgroundColor:"#F84464", color:"white"}}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Share Your Contact Details
        </AccordionSummary >
        <AccordionDetails>
            <InputBase sx={{ ml: 2,outline:1,paddingLeft:1 ,fontSize:10, width:"20%" , height:"40px",borderRadius:"2px"   ,outlineColor:'gray' }}  placeholder='Email Address'/>
            <InputBase sx={{ ml: 2,outline:1,paddingLeft:1 ,fontSize:10, width:"20%" , height:"40px",borderRadius:"2px"   ,outlineColor:'gray' }} defaultValue="+91" placeholder='Phone Number'/>
            <Button sx={{ml:2,backgroundColor:"#F84464",color:"white"}} variant="contained">Continue</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
          sx={{backgroundColor:"#F84464", color:"white"}}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Unlock Offer/Apply PromoCode
        </AccordionSummary>
        <AccordionDetails>
        <InputBase sx={{ ml: 2,outline:1,paddingLeft:1 ,fontSize:10, width:"10%" , height:"40px",borderRadius:"2px"   ,outlineColor:'gray' }} placeholder='Code'/>
        <Button sx={{ml:2,backgroundColor:"#F84464",color:"white"}} variant="contained">Apply</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
          sx={{backgroundColor:"#F84464", color:"white"}}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Payment Option
        </AccordionSummary>
        <AccordionDetails>
          Add Your Payment Gatway
        </AccordionDetails>
        <AccordionActions>

        </AccordionActions>
      </Accordion>
    </div>

        </div>
        <OrderSummary/>
      </div>




    </div>
  );
}

export default Payment