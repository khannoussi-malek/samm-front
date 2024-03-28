import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Auth/Login';
import { SignUp } from './pages/Auth/SignUp';

const Root = () => {
  const router = createBrowserRouter([{ path: '/', Component: App }, { path: '/login', Component: Login }, { path: '/signup', Component: SignUp }]);
  return <RouterProvider router={router} />;
};

export default Root;
