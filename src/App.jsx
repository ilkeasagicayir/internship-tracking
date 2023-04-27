import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyRegister from "./pages/auth/CompanyRegister";
import CompanyLogin from "./pages/auth/CompanyLogin";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/company/login" element={<CompanyLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;