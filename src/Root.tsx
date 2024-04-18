import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Auth/Login';
import { SignUpStudent } from './pages/Auth/SignUpStudent';
import { SignUpTeacher } from './pages/Auth/SignUpTeacher';
import { GuardPublicOnly } from './pages/Auth/GuardPublicOnly';
import { ErrorPage } from './components/ErrorPage';
import { Layout } from './layout/Layout';
import { GuardAuthenticated } from './pages/Auth/GuardAuthenticated';
import PageLogout from './pages/Auth/PageLogout';

const Root = () => {
  const allRoutes= [
        /**
       * Public Routes
       */
    { path: '/', 
    errorElement: <ErrorPage />,
    element: (<>
          <Outlet /></>
    ),
    children: [
      {
        path: 'logout',
        element: <PageLogout />,
      },
      { path: 'login', element: <GuardPublicOnly><Login/></GuardPublicOnly> }, 
      { path: 'signupStudent', element: <GuardPublicOnly><SignUpStudent/></GuardPublicOnly> },
      {path:'signupTeacher',element:<GuardPublicOnly><SignUpTeacher/></GuardPublicOnly>},
      {
        path: '',
        element: (
          <GuardAuthenticated>
            <Layout>
              <Outlet />
            </Layout>
          </GuardAuthenticated>
        ),
        children:[
          
        ]
      }
    ]
   }, 
  
       /**
       * Authenticated Routes
       */
       {
        path: '',
        element: (
          <GuardAuthenticated>
            <Layout>
              <Outlet />
            </Layout>
          </GuardAuthenticated>
        ),
        children: [
          {
            path: '',
            // redirect to actifsprimaires

            element: <Navigate to="dashboard" replace />,
          },

    
          { path: '*', element: <ErrorPage errorCode={404} /> },
        ],
      },
  { path: '*', element: <ErrorPage errorCode={404} /> },

  ]
  const router = createBrowserRouter(allRoutes);
  return <RouterProvider router={router} />;
};

export default Root;
