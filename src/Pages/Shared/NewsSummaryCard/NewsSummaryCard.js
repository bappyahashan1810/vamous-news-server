import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const NewsSummaryCard = ({ news }) => {

    const { title, author, _id, details, image_url, total_view, rating } = news
    return (
        <div className='my-3'>
            <Card className="">
                <Card.Header>
                    <div className='d-flex align-items-center justify-content-between' >
                        <div className='d-flex align-items-center'>
                            <img className='rounded-circle' src={author?.img} style={{ height: '40px' }}
                                alt="" />
                            <p className='mx-2'><small>{author?.name}</small></p>
                        </div>
                        <div>
                            <p><small>{author?.published_date}</small></p>
                        </div>

                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '....'}<Link to={`/news/${_id}`}>Read More</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
                    <div >
                        rating: {rating?.number}
                    </div>
                    <div>
                        views: {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;