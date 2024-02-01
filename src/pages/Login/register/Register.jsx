import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
          
            <Container className='mx-auto text-center mt-5  w-50 py-5'>
            <h4>Register your account</h4>
       <Form className='mt-5'>
        <h5>Your Name</h5>
        <input className='w-50 px-2' type="text" name="name" id="" placeholder='Enter Your name' />
        <h5> Photo URL</h5>
        <input className='w-50 px-2' type="text" name="photo" id="" placeholder='Photo url'  required/>
        <h5>Email Address</h5>
        <input className='w-50 px-2' type="email" name="email" id="" placeholder='Enter Your Email'  required/>
        <h5 className='mt-2'>Password</h5>
        <input className='w-50 px-2' type="password" name="password" id="" required placeholder='Enter Your Password' />
        <br />
        <Button className='mt-2 w-50' variant="primary" type="submit">
        Register
      </Button>
    <h5> Already have an Account? <Link to='/login'>login</Link></h5>
       </Form>
        </Container>
        </div>
    );
};

export default Register;