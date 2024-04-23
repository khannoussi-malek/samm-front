import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ErrorPage } from "../../../components/ErrorPage";
const AdminUserCreate = lazy(() => import('./AdminUserCreate'));
const AdminUserUpdate = lazy(() => import('./AdminUserUpdate'));
const AdminUsers = lazy(() => import('./AdminUsers'));


 const AdminUsersRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminUsers />} />
            <Route path="create" element={<AdminUserCreate />} />
            <Route path="update/:id" element={<AdminUserUpdate />} />
            <Route path="*" element={<ErrorPage errorCode={404} />} />
        </Routes>
    );
}
export default AdminUsersRoutes;