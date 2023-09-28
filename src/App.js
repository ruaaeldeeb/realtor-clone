import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
