import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { AuthContextProvider } from "./context/AuthContext.js";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Account from "./pages/Account.jsx";
import ProtectedRoute from "./components/ProtectedRoute.js";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/NETFLIX" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
