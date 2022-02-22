import React, { useState, useEffect } from 'react';

function TestApi() {

  const [presentations, setPresentations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
     const headers = {
       'Content-Type': 'application/json',
     }

     try {
      fetch('http://localhost:1337/api/presentations', {
        method: 'GET',
        headers: headers,
      }).then(res => res.json()).then((res) =>{
          console.log("res", res);
          setPresentations( res.data[0].attributes );
        }
      )

    } catch (error) {
      setError( error );
    }

  }, [] );

  return (
    <div>
      <h2>{presentations ? presentations.title : null }</h2>
      <p>{presentations ? presentations.text : null }</p>
    </div>
  )


}

export default TestApi;
