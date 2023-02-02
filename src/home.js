import React, { useEffect, useState} from "react";


function Home ()  {

    const [message, setMessage] = useState("null")

  useEffect(() => {
    fetch('/home').then(res => res.json()).then(data => {
      setMessage(data.time);
    });
  }, []);


    <div> 
        <p> {message}</p>
    </div>



}
export default Home;



