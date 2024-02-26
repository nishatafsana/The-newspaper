import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/pic1.png'
import second from '../../../assets/pic2.png'
import third from '../../../assets/pic3.png'

const EditorsInsights = () => {
    return (
        <div className='mt-5'>
               <Row xs={1} md={2} lg={3} className="g-4">
  
        <Col >
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>child education</Card.Title>
              <Card.Text>
              The period from birth to eight years old is one of remarkable brain development for children and represents  opportunity for education. UNESCO believes early childhood care and education that is truly inclusive is much more than just preparation for primary school.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>Child sports news</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                Coco Gauff is a rising US tennis star. On Saturday, the 19-year-old won her first Grand Slam championship by beating Aryna Sabalenka. Gauff's win makes her the youngest American to win a major tennis championship since 1999.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>Child-friendly news
</Card.Title>
              <Card.Text>
              BBC Newsround offers daily stories on national, international, sports, entertainment and science news, as well as inspiring stories about children. You can watch the Newsround bulletins and read stories on the website. Now there are only eight teams left
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

    
    </Row>
        </div>
    );
};

export default EditorsInsights;