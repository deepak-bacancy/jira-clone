import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Header = lazy(() => import('../../components/Header/header'));
const Project = lazy(() => import('../Project/index'));
const Dashboard = lazy(() => import('../Dashboard/dashboard'));
const ProjectDetail = lazy(() => import('../Detail/ProjectDetail/ProjectDetail'));

const RouteHandler = () => {
  return (
    <Suspense fallback={''}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Suspense>
  );
};

export default RouteHandler;
