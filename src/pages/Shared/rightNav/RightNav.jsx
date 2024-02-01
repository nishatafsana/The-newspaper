import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub ,FaFacebook,FaWhatsapp,FaTwitter,FaTwitch} from "react-icons/fa";
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <h2>LogIn With</h2>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle>Login with Google</Button>
      <Button variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
      <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                 
                </ListGroup>
            </div>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;
