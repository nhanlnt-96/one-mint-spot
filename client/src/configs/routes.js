import AdminPage from "../pages/admin/AdminPage";
import Homepage from "../pages/homepage/Homepage";
import LoginPage from "../pages/login/LoginPage";
import AdminHomepage from "pages/adminHomepage/AdminHomepage";
import BannerEditor from "pages/bannerEditor/BannerEditor";

export const mainRoutes = [
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

export const adminRoutes = {
  path: "/admin",
  module: <AdminPage/>,
  isPrivate: false,
  children: [
    {
      module: <AdminHomepage/>,
    },
    {
      path: "banner",
      module: <BannerEditor/>
    }
  ]
};