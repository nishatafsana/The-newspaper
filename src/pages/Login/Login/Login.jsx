import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';


const Login = () => {
    return (
        <Container className='mx-auto text-center mt-5  w-50 py-5'>
            <h4>Login your account</h4>
       <Form className='mt-5'>
        <h5>Email Address</h5>
        <input className='w-50 px-2' type="email" name="email" id="" placeholder='Enter Your Email'  required/>
        <h5 className='mt-2'>Password</h5>
        <input className='w-50 px-2' type="password" name="password" id="" required placeholder='Enter Your Password' />
        <br />
        <Button className='mt-2 w-50' variant="primary" type="submit">
        Login
      </Button>
    <h5>Dont’t Have An Account ? <Link to='/register'>Register</Link></h5>
       </Form>
        </Container>
    );
};

export default Login;