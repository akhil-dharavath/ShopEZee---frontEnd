import React, { lazy } from "react";
import Home from "../screens/Home";
import Everything from "../screens/Everything";

// const MainPage = lazy(() => import('../app/Layout/DefaultLayout'))

// const DashBoardPage = lazy(() => import('../pages/MainPage/Main/Dashboard/jobs_dashboard'))

const JobPage = lazy(() => import('../pages/MainPage/Administration/Jobs/requisition'))
const JobDetails = lazy(() => import('../pages/MainPage/Administration/Jobs/jobdetails'))
const AddJobs = lazy(() => import('../pages/MainPage/Administration/Jobs/create-requisition'))
const EditJob = lazy(() => import('../pages/MainPage/Administration/Jobs/update-requisition'))

const CandidatePage = lazy(() => import('../pages/MainPage/Administration/Jobs/candidatelist'))
const CandidateDetails = lazy(() => import('../pages/MainPage/Administration/Jobs/candidateprofile'))
const AddCandidate = lazy(() => import('../pages/MainPage/Administration/Jobs/create_candidate'))
const EditCandidate = lazy(() => import('../pages/MainPage/Administration/Jobs/update-candidate'))

const ManageResumesPage = lazy(() => import('../pages/MainPage/Administration/Jobs/manageresumes'))

const ErrorPage = lazy(() => import('../pages/MainPage/Pages/ErrorPage/error404'))

const MainRoutes = {
  path: '/',
  element: <Home />,
  children: [
    {
      path: 'everything',
      element: <Everything/>,
    },
    {
      path: 'jobs',
      children: [
        {
          index: true,
          element: <JobPage />,
        },
        {
          path: 'jobDetails/:id',
          element: <JobDetails />,
        },
        {
          path: 'addJob',
          element: <AddJobs />,
        },
        {
          path: 'editJob/:id',
          element: <EditJob />,
        },
      ],
    },
    {
      path: 'candidates',
      children: [
        {
          index: true,
          element: <CandidatePage />,
        },
        {
          path: 'candidateProfile/:id',
          element: <CandidateDetails />,
        },
        {
          path: 'addCandidate',
          element: <AddCandidate />,
        },
        {
          path: 'editCandidate/:id',
          element: <EditCandidate />,
        },
      ],
    },
    {
      path: 'manageResumes',
      element: <ManageResumesPage />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ]
}

export default MainRoutes;