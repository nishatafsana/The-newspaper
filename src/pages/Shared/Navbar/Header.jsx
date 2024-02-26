import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'

import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../../providers/AuthProvider';


const Header = () => {
    const {user} = useContext(AuthContext)
  
    return (
       <Container>
         <div>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd MMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
            <Button  style={{ width: '180px' }} variant="danger">Breaking news</Button>
            <Marquee className='text-danger'>
            Prime Minister Sheikh Hasina has written back to US President Joe Biden.
            A US Air Force member set himself on fire outside the Israeli Embassy in Washington, DC, livestreaming a protest against alleged genocide in Gaza. This disturbing video was later
</Marquee>
            </div>
            {/* navbar */}
       
        </div>
       </Container>
    );
};

export default Header;
