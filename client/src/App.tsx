import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Blog from "./Pages/Blog/Blog";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

const App: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
