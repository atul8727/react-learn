import React from 'react';
import { useSearchParams,useNavigate } from 'react-router-dom';

function About(props) {
     let [searchParams, setSearchParams] = useSearchParams();
    // alert(searchParams.get('age'))
    return (
        <div>
            <h1>About Page</h1>
        </div>
    );
}

export default About;
