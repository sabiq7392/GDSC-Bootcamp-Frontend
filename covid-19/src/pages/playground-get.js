import { useState } from "react";
import { useEffect } from "react"

export default function PagePlaygroundGet() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      });
  }, []);
  

  return (
    <>
      <h1>Page: Playground</h1>

      {data.map((_data, index) => (
        <div key={index}>
          <h2>{_data.title}</h2>
          <p>{_data.body}</p>
        </div>
      ))}

    </>
  )
}