import AdminPage from "../pages/admin/AdminPage";
import Homepage from "../pages/homepage/Homepage";
import LoginPage from "../pages/login/LoginPage";

export const routes = [
  {
    path: "/admin",
    module: <AdminPage/>,
    isPrivate: true,
  },
  {
    path: "/",
    module: <Homepage/>,
    isPrivate: false,
  },
  {
    path: "/login",
    module: <LoginPage/>,
    isPrivate: false,
  },
];