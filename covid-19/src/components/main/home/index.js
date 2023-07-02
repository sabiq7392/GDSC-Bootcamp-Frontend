import styles from "./main.module.css";
import covid1 from "./covid.png";
import covid2 from "./covid2.png";
import { useState } from "react";

function Main() {
  const [data, setData] = useState([
    {
      provinsi: "Depok",
      positif: 0,
      sembuh: 0,
      dirawat: 0,
      meninggal: 0,
    },
  ]);

  const [provinsi, setProvinsi] = useState(null);
  const [jumlah, setJumlah] = useState(null);
  const [status, setStatus] = useState(null);

  const onChangeProvinsi = (event) => {
    setProvinsi(event.target.value);
  };

  const onChangeJumlah = (event) => {
    setJumlah(event.target.value);
  };

  const onChangeStatus = (event) => {
    console.log(event.target.value);  
    setStatus(event.target.value);
  }

  const onSubmit = (event) => {
    console.log("submitted");
    event.preventDefault();

    const isProvinsiExist = data.find((_data) => _data.provinsi === provinsi);

    if (isProvinsiExist) {
      const findIndexProvinsi = data.findIndex((_data) => _data.provinsi === provinsi);

      const updatedData = data.map((_data, index) => {
        if (index === findIndexProvinsi) {
          return {
            ..._data,
            [status]: jumlah,
          };
        } else {
          return _data;
        }
      });

      console.log(updatedData);
      setData(updatedData);
    } else {
      setData((data) => [
        ...data, 
        {
          provinsi: provinsi,
          [status]: jumlah,
        },
      ]);
    }
  };

  return (
    <main>
      <div className={styles.container2}>
        <h1>Provinsi</h1>
        <h2>Data Covid Berdasarkan Provinsi</h2>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((_data, index) => (
              <tr key={_data.provinsi}>
                <th>{index + 1}</th>
                <th>{_data?.provinsi ?? 0}</th>
                <th>{_data?.positif ?? 0}</th>
                <th>{_data?.sembuh ?? 0}</th>
                <th>{_data?.dirawat ?? 0}</th>
                <th>{_data?.meninggal ?? 0}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.container3}>
        <div className={styles.photo}>
          <img src={covid2} alt="covid2" />
        </div>
        <div className={styles.form}>
          <h1 className={styles.formtitle}>Form Covid</h1>
          <form onSubmit={onSubmit}>
            <label 
              className={styles.formlabel} 
              htmlFor="provinsi"
            >
              Provinsi
            </label>
            <br />
            <input 
              className={styles.forminput}
              type="text" 
              name="provinsi"
              onChange={onChangeProvinsi}
            />
            <br />
            <label 
              className={styles.formlabel} 
              htmlFor="jumlah"
            >
              Jumlah
            </label>
            <br />
            <input 
              className={styles.forminput} 
              type="text" 
              name="jumlah"
              onChange={onChangeJumlah}
            />
            <br />
            <label 
              className={styles.formlabel} 
              htmlFor="status"
            >
              Status
            </label>
            <br />
            <select 
              className={styles.forminput} 
              type="text" 
              name="status"
              onChange={onChangeStatus}
              defaultValue="Positif"
            >
              <option value="positif">Positif</option>
              <option value="sembuh">Sembuh</option>
              <option value="dirawat">Dirawat</option>
              <option value="meninggal">Meninggal</option>
            </select>
            <br />
            <input className={styles.formbutton} type="submit" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Main;
