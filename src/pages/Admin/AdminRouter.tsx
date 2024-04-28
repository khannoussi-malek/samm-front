import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../../components/ErrorPage";
import { lazy } from "react";

const AdminMajorRoutes = lazy(() => import('./majors/AdminMajorRoutes'));
const AdminUsersRoutes = lazy(() => import('./Users/AdminUsersRoutes'));
const AdminNewsUsersRoutes = lazy(() => import('./../News/AdminNewsUsersRoutes'));
const DepartmentsRoutes = lazy(() => import('./Departments/DepartmentsRoutes'));
const AdminRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="users" replace />} />
      <Route path="users/*" element={<AdminUsersRoutes />} />
      <Route path="departments/*" element={<DepartmentsRoutes />} />
      <Route path="news/*" element={<AdminNewsUsersRoutes />} />
      <Route path="major/*" element={<AdminMajorRoutes />} />

      <Route path="*" element={<ErrorPage errorCode={404} />} />
    </Routes>
  );
};

export default AdminRouter;