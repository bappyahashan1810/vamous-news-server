import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const { image_url, details, category_id, title } = news;

    return (
        <div>
            <p>this is news pages</p>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/catagory/${category_id}`}>
                        <Button variant="primary">Similar News</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default News;