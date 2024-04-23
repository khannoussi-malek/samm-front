import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../../components/ErrorPage";
import { lazy } from "react";

const AdminUsersRoutes = lazy(() => import('./Users/AdminUsersRoutes'));
const AdminNewsUsersRoutes = lazy(() => import('./../News/AdminNewsUsersRoutes'));
 const AdminRouter = () => {

    return(
        <Routes>
          <Route path="/" element={<Navigate to="users" replace />} />
        <Route path="users/*" element={<AdminUsersRoutes />} />
        <Route path="news/*" element={<AdminNewsUsersRoutes />} />
        <Route path="*" element={<ErrorPage errorCode={404} />} /> 
      </Routes>
    );
};

export default AdminRouter;