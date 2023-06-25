import { useEffect, useState } from "react"

export default function BelajarUseEffect() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) =>{
        setData(json);
      })
  }, []);

  return (
    <div id="hai">
      
    </div>
  );
}

// https://jsonplaceholder.typicode.com/todos/1

// BACKEND => KIRIM DATA => API[punya data] => FRONTEND => FETCH => FRONTEND PAKE DATA