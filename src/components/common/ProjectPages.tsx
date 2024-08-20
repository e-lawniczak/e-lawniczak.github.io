import { ProjectPage } from "./models";
import React from 'react'

const
    HomePage = React.lazy(() => import('../../pages/home/HomePage')),
    AboutPage = React.lazy(() => import('../../pages/about/AboutPage'));


export const ProjectPages = [
    { name: "Home Page", path: "/", element: <HomePage /> },
    { name: "About Page", path: "/about", element: <AboutPage /> }
] as ProjectPage[]