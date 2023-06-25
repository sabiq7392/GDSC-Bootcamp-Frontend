import { useState } from "react";
import { MdDarkMode } from "react-icons/md";

export default function BelajarState() {
  const [isDarkMode,setIsDarkMode] = useState(false);

  console.log("isDarkMode", isDarkMode);

  const onSetIsDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  

  return (
    <div>
      <button onClick={onSetIsDarkMode}>
        <MdDarkMode />
      </button>
      <br/>
      <br/>
      <div style={{ height: 500, width: "100%", border: "1px solid red", background: isDarkMode ? "#333" : "#eee" }}>

      </div>
    </div>
  );
}