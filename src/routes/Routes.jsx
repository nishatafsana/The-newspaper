import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

import Category from "../pages/Home/category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/news/News/News";
import LogInLayOut from "../layouts/LogInLayOut";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/register/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element :<LogInLayOut></LogInLayOut>,
    children:[
      {
        path: '/',
        element:<Navigate to= '/category/0'></Navigate>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'register',
        element:<Register></Register>
      },
    ]
  },
    {
      path: "category",
      element: <Main></Main>,
      children:[
      
        {
          path:":id",
          element: <Category></Category>,
          loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        }
       
      ]
    },
    {
      path: 'news',
      element: <NewsLayout></NewsLayout>,
      children:[
        {
          path: ':id',
          element : <News></News>,
          loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)

        }
      ]

    }
  ]);
  export default router;