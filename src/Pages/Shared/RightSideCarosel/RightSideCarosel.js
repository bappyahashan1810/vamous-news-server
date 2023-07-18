import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img_1 from '../../../assests/caroselImage/image-1.jpg'
import img_2 from '../../../assests/caroselImage/image-2.jpg';
import img_3 from '../../../assests/caroselImage/image-3.jpg';



const RightSideCarosel = () => {
    return (
        <div className='mt-4'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img_1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img_2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img_3}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default RightSideCarosel;