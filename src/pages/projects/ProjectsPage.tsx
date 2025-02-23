import { useState } from "react"
import { ChronologyEntry } from "../../components/common/ChronologyEntry"
import { EntryList } from "../../components/common/EntryList"
import {  ProjectType } from "../../components/common/models"
import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"
import './_projectsPage.scss'
import { projectsInfo } from "./ProjectsInfo"



export default () => {
    const
        [tab, setTab] = useState<ProjectType>("web"),
        tabs = [
            "web",
            "game",
            "all",
        ] as ProjectType[],
        projects = tab != "all" ? projectsInfo.filter(p => (p.type == tab || p.type == "all")) : projectsInfo

    return <BasePage pageCssClass="projects-page">
        <div className="wrapper">
            <PageTitle>projects</PageTitle>
            <div className="tabs">
                <span>Filter projects:</span>
                {tabs.map(t => <div className={`tab ${t}-tab ${t == tab && "current"}`} onClick={() => setTab(t)}>{t}</div>)}
            </div>
            <EntryList className={"project-list"} turnOffMarks={true}>
                {projects.map(p => <ChronologyEntry info={p} entryType={"pro"} />)}
            </EntryList>
        </div>
    </BasePage>
}
