import LandingPage from "./components/LandingPage";
import SignupPage from "./components/SignupPage.js";
import LoginPage from "./components/LoginPage.js";
import HomePage from "./components/HomePage.js";
import { ThemeProvider } from "./components/ThemeProvider.js";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
