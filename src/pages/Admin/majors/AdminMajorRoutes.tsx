import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "../../../components/ErrorPage";
import { lazy } from "react";
const AdminMajor = lazy(() => import('./AdminMajor'));


const AdminMajorRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminMajor />} />
            <Route path="*" element={<ErrorPage errorCode={404} />} />
        </Routes>
    );
}

export default AdminMajorRoutes;