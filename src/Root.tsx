import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Auth/Login';
import { SignUpStudent } from './pages/Auth/SignUpStudent';
import { SignUpTeacher } from './pages/Auth/SignUpTeacher';
import { StudentList } from './pages/StudentList/StudentList';

const Root = () => {
  const router = createBrowserRouter([{ path: '/', Component: App }, { path: '/login', Component: Login }, { path: '/signupStudent', Component: SignUpStudent},{path:'/signupTeacher',Component:SignUpTeacher},{ path: '/List', Component: StudentList}]);
  return <RouterProvider router={router} />;
};

export default Root;
