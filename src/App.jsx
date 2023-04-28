import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyRegister from "./pages/auth/CompanyRegister";
import CompanyLogin from "./pages/auth/CompanyLogin";
import HomePage from "./pages/HomePage";
import Company from "./pages/company/Company";
import CompanyNavbar from "./components/navbar/CompanyNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/company/login" element={<CompanyLogin />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/new" element={<CompanyNavbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;