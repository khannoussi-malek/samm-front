import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const NewsUpdate = lazy(()=>import('./NewsUpdate'));
const NewsCreate = lazy(()=>import('./NewsCreate'));
const AdminNewsUsersRoutes = ()=>{
    return(
        <Routes>
<Route path="/" element={<Navigate to="create" replace />} />
<Route path="create" element={<NewsCreate/>} />
<Route path="update/:id" element={<NewsUpdate />} />
</Routes>
    )
}

export default AdminNewsUsersRoutes;