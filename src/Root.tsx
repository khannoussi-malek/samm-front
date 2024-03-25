import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Auth/Login';

const Root = () => {
  const router = createBrowserRouter([{ path: '/', Component: App },{ path: '/login', Component: Login }]);
  return <RouterProvider router={router} />;
};

export default Root;
