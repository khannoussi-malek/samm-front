import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "../../components/ErrorPage";
import { lazy } from "react";

const AdminUsersRoutes = lazy(() => import('./Users/AdminUsersRoutes'));

 const AdminRouter = () => {

    return(
        <Routes>
        <Route path="users/*" element={<AdminUsersRoutes />} />
        <Route path="*" element={<ErrorPage errorCode={404} />} /> 
      </Routes>
    );
};

export default AdminRouter;