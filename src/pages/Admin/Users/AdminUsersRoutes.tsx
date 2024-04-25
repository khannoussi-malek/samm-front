import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ErrorPage } from "../../../components/ErrorPage";
const AdminUsers = lazy(() => import('./AdminUsers'));


 const AdminUsersRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminUsers />} />
            <Route path="*" element={<ErrorPage errorCode={404} />} />
        </Routes>
    );
}
export default AdminUsersRoutes;