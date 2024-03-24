import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';

const Root = () => {
  const router = createBrowserRouter([{ path: '/', Component: App }]);
  return <RouterProvider router={router} />;
};

export default Root;
