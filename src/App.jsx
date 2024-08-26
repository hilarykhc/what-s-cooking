import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Onboarding from "./pages/Onboarding/Onboarding";
import SignupPage from "./pages/SignupPage/SignupPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <Header />
    //   <Search />
    // </>
  );
}

export default App;
