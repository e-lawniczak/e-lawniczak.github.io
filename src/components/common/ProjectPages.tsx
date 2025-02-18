import { ProjectPage } from "./models";
import React from 'react'

const
    HomePage = React.lazy(() => import('../../pages/home/HomePage')),
    ExperiencePage = React.lazy(() => import('../../pages/experience/ExperiencePage')),
    SkillsPage = React.lazy(() => import('../../pages/skills/SkillsPage')),
    ContactPage = React.lazy(() => import('../../pages/contact/ContactPage')),
    ProjectsPage = React.lazy(() => import('../../pages/projects/ProjectsPage')),
    EducationPage = React.lazy(() => import('../../pages/education/EducationPage'))


export const ProjectPages = [
    { label: "Home", name: "Home Page", path: "/", element: <HomePage /> },
    { label: "Home", name: "Home Page", path: "/*", element: <HomePage /> },
    { label: "Skills", name: "Experience Page", path: "/Skills", element: <SkillsPage /> },
    { label: "Experience", name: "Experience Page", path: "/Experience", element: <ExperiencePage /> },
    { label: "Projects", name: "Projects Page", path: "/Projects", element: <ProjectsPage /> },
    { label: "Education", name: "Education Page", path: "/Education", element: <EducationPage /> },
    { label: "Contact", name: "Contact Page", path: "/Contact", element: <ContactPage /> },
] as ProjectPage[]