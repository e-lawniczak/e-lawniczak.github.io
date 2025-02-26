import { ChronologyEntry } from "../../components/common/ChronologyEntry"
import { EntryList } from "../../components/common/EntryList"
import { WorkInfo } from "../../components/common/models"
import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"


const workInfo = [
    {
        title: "Fullstack Web Developer", dateStart: new Date('09-01-2019'), dateEnd: null, company: "Thinq sp. z o.o.", workplaceLogo: "",
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
            { techName: "ASP.NET" },
            { techName: "Azure Dev Ops" },
            { techName: "CI/CD Pipelines" },
        ]
    },
] as WorkInfo[]

export default () => {
    return <BasePage pageCssClass="experience-page">
        <div className="wrapper">
            <PageTitle>Experience</PageTitle>
            <EntryList className="experience-info" >
                {workInfo.map(e => <ChronologyEntry info={e} entryType={"wrk"} />)}
            </EntryList>
        </div>
    </BasePage>
}
