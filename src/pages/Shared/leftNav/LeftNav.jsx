import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div className='mt-5'>
            <h2><u>All category</u></h2>
           <div>
           {
                categories.map(category => <p key={category.id}>
                    <Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
           </div>
  <div>
  <Row xs={1} md={2} lg={1} className="g-4">
  
  <Col >
    <Card>
      <Card.Img variant="top" src={first} />
      <Card.Body>
        <Card.Title>Child education</Card.Title>
        <Card.Text>
        The period from birth to eight years old is one of remarkable brain development for children and represents a crucial window of opportunity for education. UNESCO believes early childhood care and education (ECCE) that is truly inclusive is much more than just preparation for primary school.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col >
    <Card>
      <Card.Img variant="top" src={second} />
      <Card.Body>
        <Card.Title>Media and entertainment</Card.Title>
        <Card.Text>
        This is an evolving form of art that is created using new techniques like interactivity, projection-mapping, immersive technologies, robotics, graphics, video games, animation, various 3-D technologies, physical computing, augmented and virtual reality, and the possibilities are immense.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col >
    <Card>
      <Card.Img variant="top" src={third} />
      <Card.Body>
        <Card.Title>Sports</Card.Title>
        <Card.Text>
        The Sher-e-Bangla National Cricket Stadium (SBNCS; Bengali: শের-ই-বাংলা জাতীয় ক্রিকেট স্টেডিয়াম), also called Mirpur Stadium, is an International cricket ground at Mirpur, in Dhaka, the capital of Bangladesh. Located 10 kilometres from Mirpur city centre, the ground holds approximately 25,000 people and is named after the Bengali statesman A. K. Fazlul Huq, who was accorded the title Sher-e-Bangla ("Tiger of Bengal").
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>


</Row>
  </div>
        </div>
    );
};

export default LeftNav;
