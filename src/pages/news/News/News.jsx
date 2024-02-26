import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../editorInsight/EditorsInsights';


const News = () => {
   
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;
    return (
        <div>
            {/* <h2>news details comming son</h2> */}
         <div>
         <Card className='mt-5 mb-5'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="danger">All news in this category</Button>
                </Link>
            </Card.Body>
        </Card>
         </div>
         <EditorsInsights></EditorsInsights>
       
        </div>
    );
};

export default News;