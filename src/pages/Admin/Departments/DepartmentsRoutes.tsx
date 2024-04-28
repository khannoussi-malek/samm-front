import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ErrorPage } from "../../../components/ErrorPage";
const DepartmentsList = lazy(() => import('./DepartmentsList'));


const DepartmentsRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DepartmentsList />} />
            <Route path="*" element={<ErrorPage errorCode={404} />} />
        </Routes>
    );
}
export default DepartmentsRoutes;