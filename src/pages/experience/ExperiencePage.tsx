import { ChronologyEntry } from "../../components/common/ChronologyEntry"
import { EntryList } from "../../components/common/EntryList"
import { WorkInfo } from "../../components/common/models"
import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"


const workInfo = [
    {
        title: "Software engineer", dateStart: new Date('04-30-2025'), dateEnd: null, company: "POINTER sp. z o.o.", workplaceLogo: "",
        description: <>
            <b>Tasks as a Software Developer </b>:
            <ul>
               <li>Developing new applications with .NET and React</li>
               <li>Creating full functionalities from back end to front end based on customer needs</li>
               <li>Maintaining and supporting ongoing projects</li>
               <li>Managing Azure Data Factory & other Azure features</li>
               <li>Responding to customer requests</li>
            </ul>
        </>,
        techStack: [
            { techName: "React" },
            { techName: "Typescript" },
            { techName: "C#" },
            { techName: ".NET" },
            { techName: "Azure Dev Ops" },
            { techName: "Microsoft Azure " },
            { techName: "T-SQL " },
            { techName: "MsSQL " },
        ]
    },
    {
        title: "Fullstack Web Developer", dateStart: new Date('03-01-2023'), dateEnd: new Date('04-30-2025'), company: "Thinq sp. z o.o.", workplaceLogo: "",
        description: <>
            <b>Tasks as a Fullstack Web Developer </b>:
            <ul>
                <li>Engineereing and maintaining web applications</li>
                <li>Creating static websites</li>
                <li>Time management features</li>
                <li>Database querying</li>
                <li>AI research</li>
                <li>Pipeline management - CI/CD, builds, releases, web hooks </li>
                {/* <li>PC servicing and maintennance</li> */}
            </ul>
        </>,
        techStack: [
            { techName: "React" },
            { techName: "Typescript" },
            { techName: "C#" },
            { techName: ".NET" },
            { techName: "Azure Dev Ops" },
            { techName: "CI/CD Pipelines" },
        ]
    },
] as WorkInfo[]

export default () => {
    return <BasePage pageCssClass="experience-page">
        <div className="wrapper">
            <PageTitle>Experience</PageTitle>
            <EntryList className="experience-info" startOverride="2023" >
                {workInfo.map(e => <ChronologyEntry info={e} entryType={"wrk"} />)}
            </EntryList>
        </div>
    </BasePage>
}
