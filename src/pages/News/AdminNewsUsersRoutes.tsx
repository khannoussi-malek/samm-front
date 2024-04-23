import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const NewsCreate = lazy(()=>import('./NewsCreate'));
const AdminNewsUsersRoutes = ()=>{
    return(
        <Routes>
<Route path="/" element={<Navigate to="create" replace />} />
<Route path="create" element={<NewsCreate/>} />
</Routes>
    )
}

export default AdminNewsUsersRoutes;