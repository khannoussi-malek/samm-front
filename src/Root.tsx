import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Auth/Login';
import { SignUpStudent } from './pages/Auth/SignUpStudent';
import { SignUpTeacher } from './pages/Auth/SignUpTeacher';

const Root = () => {
  const router = createBrowserRouter([{ path: '/', Component: App }, { path: '/login', Component: Login }, { path: '/signupStudent', Component: SignUpStudent},{path:'/signupTeacher',Component:SignUpTeacher}]);
  return <RouterProvider router={router} />;
};

export default Root;
