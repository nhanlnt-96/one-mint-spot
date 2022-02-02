import AdminPage from "../pages/admin/AdminPage";
import Homepage from "../pages/homepage/Homepage";
import LoginPage from "../pages/login/LoginPage";
import AdminHomepage from "pages/adminHomepage/AdminHomepage";
import BannerEditor from "pages/bannerEditor/BannerEditor";
import PageNotFound from "pages/pageNotFound/PageNotFound";

export const mainRoutes = [
  {
    path: "/",
    module: <Homepage/>,
  },
  {
    path: "/login",
    module: <LoginPage/>,
  },
  {
    path: "*",
    module: <PageNotFound/>,
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