import Header from './component/header/header';
import Main from './component/main/main';
import Footer from './component/footer/footer';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState(null);
  const [status, setStatus] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();

    const isNameNotExist = nama === null || nama === "";
    const isStatusNotExists = status === null || status === "";

    if (isNameNotExist || isStatusNotExists) {
      alert("Nama harus diisi");
    } else {
      const isNameAlreadyExist = data.find((_data) => _data.nama.toLowerCase() === nama.toLowerCase());

      if (isNameAlreadyExist) {
        // DO UPDATE
        const findIndex = data.findIndex((_data) => _data.nama.toLowerCase() === nama.toLowerCase());

        console.log("tanpa toLowerCase", data[findIndex].nama ,nama)

        const updatedData = data.map((_data, index) => {
          if (findIndex === index) {
            return {
              nama: nama,
              status: status,
            };
          } else {
            return _data;
          }
        });

        setData(updatedData);
      } else {
        // DO CREATE
        setData([
          ...data,
          {
            nama: nama,
            status: status,
          },
        ]);
      }
    }
  };

  const onChangeNama = (event) => {
    setNama(event.target.value);
  };

  const onChangeStatus = (event) => {
    setStatus(event.target.value);
  };


  console.log(data);
  // console.log(data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>Nama</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {data.map((_data, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{_data.nama}</th>
              <th>{_data.status}</th>
            </tr>
          ))}
        </tbody>
      </table>
      
      <br />
      <br />
      <br />

      <form onSubmit={onSubmit}>
        <div>
          <label>Nama: </label>
          <input name="name" onChange={onChangeNama} />
        </div>
        <br />
        <div>
          <label>Status: </label>
          <input name="status" onChange={onChangeStatus} />
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
