import Bookstore from "./components/Bookstore";
import ConfirmPage from "./components/ConfirmPage";
import Home  from "./components/Home";


const AppRoutes = [


  {
    index: true,
    element: <Home />
  },
  {
      path: '/bookstore',
      element: <Bookstore />
  },
  {
      path: '/ConfirmPage',
      element: <ConfirmPage />
   }

];

export default AppRoutes;
