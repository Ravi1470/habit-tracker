import Login from "../pages/auth/Login";
import { Route, Routes } from "react-router-dom";
import AllHabitsPage from "../components/habits/AllHabitsPage";
import Dashboard from "../pages/dashboard/Dashboard";

Routes;
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          element={<Login />}
          path="/login"
        />
        <Route
          element={<AllHabitsPage />}
          path="/Allhabit"
        />
        <Route
          element={<Dashboard />}
          path="/dashboard"
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
