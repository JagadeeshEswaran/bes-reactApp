// import './App.css'
import LandingPage from "./Pages/LandingPage";
import UserAuthentication from "./Pages/UserAuthentication";

function App() {
  const isUserLoggedIn = JSON.parse(localStorage.getItem("isUserLoggedIn")); // true or false

  return (
    <>
      {
        // CODITIONAL RENDERING
        isUserLoggedIn ? <LandingPage /> : <UserAuthentication />
      }
    </>
  );
}

export default App;
