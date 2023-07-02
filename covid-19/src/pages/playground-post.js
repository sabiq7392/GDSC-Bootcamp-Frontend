import { useState } from "react";

export default function PagePlaygroundPost() {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [userId, setUserId] = useState(null);
  const [data, setData] = useState(null);

  
  const onSubmit = (event) => {
    // berfungsi untuk mencegah auto refresh ketik submit
    event.preventDefault();


    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      });
  }

  /**
   * @description 
   * untuk mendapatkan title dari input
   */
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  /**
   * @description 
   * untuk mendapatkan body dari input
   */
  const onChangeBody = (event) => {
    setBody(event.target.value);
  };

  /**
   * @description 
   * untuk mendapatkan userId dari input
   */
  const onChangeUserId = (event) => {
    setUserId(event.target.value);
  }

  return (
    <>
      <h1>Page: Playground</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label>
          <input name="title" onChange={onChangeTitle}  />
        </div>
        <br/>
        <br/>
        <div>
          <label>Body</label>
          <input name="body" onChange={onChangeBody} />
        </div>
        <br/>
        <br/>
        <div>
          <label>User ID</label>
          <input name="userId" onChange={onChangeUserId} /> 
        </div>
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>

      {data !== null && (
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <p>{data.userId}</p>
        </div>
      )}
    </>
  )
}