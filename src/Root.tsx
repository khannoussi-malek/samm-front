import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorPage } from './components/ErrorPage';
import { Layout } from './layout/Layout';
import { GuardAdmin } from './pages/Auth/GuardAdmin';
import { GuardAuthenticated } from './pages/Auth/GuardAuthenticated';
import { GuardPublicOnly } from './pages/Auth/GuardPublicOnly';
import { Loader } from './pages/Auth/Loader';
import PageLogout from './pages/Auth/PageLogout';
import { SignUpStudent } from './pages/Auth/SignUpStudent';
import { SignUpTeacher } from './pages/Auth/SignUpTeacher';
import { Courses } from './pages/Courses/Courses';
import { CourseDetails } from './pages/Courses/CourseDetails';
import { GuardStudent } from './pages/Auth/GuardStudent';

const NewsDetails = lazy(() => import('./pages/News/NewsDetails'));
const News = lazy(() => import('./pages/News/News'));
const AdminRouter = lazy(() => import('./pages/Admin/AdminRouter'));
const Login = lazy(() => import('./pages/Auth/Login'));
const AdminTimeTables = lazy(() => import('./pages/Admin/AdminTimeTables/AdminTimeTables'));
const StudentTimeTables = lazy(() => import('./pages/StudentTimeTables'));
const Root = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/">
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/news" replace />} />
              <Route
                path="login"
                element={
                  <GuardPublicOnly>
                    <Login />
                  </GuardPublicOnly>
                }
              />
              <Route
                path="signupStudent"
                element={
                  <GuardPublicOnly>
                    <SignUpStudent />
                  </GuardPublicOnly>
                }
              />
              <Route
                path="signupTeacher"
                element={
                  <GuardPublicOnly>
                    <SignUpTeacher />
                  </GuardPublicOnly>
                }
              />
              <Route
                path="logout"
                element={
                  <ErrorBoundary>
                    <PageLogout />
                  </ErrorBoundary>
                }
              />
              <Route
                path="admin/*"
                element={
                  <GuardAdmin>
                    <AdminRouter />
                  </GuardAdmin>
                }
              />
                <Route
                path="News"
                element={
                  <GuardAuthenticated>
                    <News />
                  </GuardAuthenticated>
                }
              />
                <Route
                path="courses"
                element={
                  <GuardAuthenticated>
                    <Courses />
                  </GuardAuthenticated>
                }
              />
              <Route
                path="timetables"
                element={
                  <GuardAdmin>
                    <AdminTimeTables />
                  </GuardAdmin>
                }
              />
              <Route
                path="timetable"
                element={
                  <GuardStudent>
                    <StudentTimeTables />
                  </GuardStudent>
                }
              />
              <Route
                path="courses/:id"
                element={
                  <GuardAuthenticated>
                    <CourseDetails />
                  </GuardAuthenticated>
                } />
                <Route
                path="News/:id"
                element={
                  <GuardAuthenticated>
                    <NewsDetails />
                  </GuardAuthenticated>
                }
              />
              <Route path="*" element={<ErrorPage errorCode={404} />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default Root;
