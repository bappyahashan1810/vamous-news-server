import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagories, setCatagoy] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/catagoies-news')
            .then(res => res.json())
            .then(data => setCatagoy(data))
    }, [])
    return (
        <div className='d-none d-lg-block'>
            {
                catagories.map(catagory => <p key={catagory.id}>
                    <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;