import { Routes, Route } from "react-router-dom";
import PageHome from "./pages";
import PageAbout from "./pages/about";
import PagePlaygroundGet from "./pages/playground-get";
import PagePlaygroundPost from "./pages/playground-post";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/playground-get" element={<PagePlaygroundGet />} />
        <Route path="/playground-post" element={<PagePlaygroundPost />} />
      </Routes>
    </>
  );
}

export default App;
