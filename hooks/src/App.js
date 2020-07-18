import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

    //useEffect
    const [resourceType, setResourceType] = useState("post")
    console.log("render")
    const [item, setitem] = useState([])

    useEffect(
        () => {
            fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
                .then(response => response.json())
                .then(json => setitem(json));
        }, [resourceType]
    );
    //useEffect
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">American Insurance</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>



            <div>
                <button onClick={() => setResourceType("posts")}> Posts</button>
                <button onClick={() => setResourceType("users")}> users</button>
                <button onClick={() => setResourceType("comments")}> comments</button>
                <h1>{resourceType}</h1>

            </div>

        </div>

    );

}

export default App;
