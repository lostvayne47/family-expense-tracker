import Landing from "./components/Landing";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import { ThemeProvider } from "./components/ThemeProvider.js";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </Provider>
    </>
  );
}

export default App;
