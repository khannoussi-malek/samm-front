import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Auth/Login';
import { SignUpStudent } from './pages/Auth/SignUpStudent';
import { SignUpTeacher } from './pages/Auth/SignUpTeacher';
import { GuardPublicOnly } from './pages/Auth/GuardPublicOnly';
import { ErrorPage } from './components/ErrorPage';

const Root = () => {
  const allRoutes= [
    { path: '/', 
    errorElement: <ErrorPage />,
    children: [
      { path: 'login', element: <GuardPublicOnly><Login/></GuardPublicOnly> }, 
      { path: 'signupStudent', element: <GuardPublicOnly><SignUpStudent/></GuardPublicOnly> },
      {path:'signupTeacher',element:<GuardPublicOnly><SignUpTeacher/></GuardPublicOnly>},
      
    ]
   }, 
  
  { path: '*', element: <ErrorPage errorCode={404} /> },

  ]
  const router = createBrowserRouter(allRoutes);
  return <RouterProvider router={router} />;
};

export default Root;
