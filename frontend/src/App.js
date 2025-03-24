import LandingPage from "./components/LandingPage";
import { ThemeProvider } from "./components/ThemeProvider.js";
function App() {
  return (
    <>
      <ThemeProvider>
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
