import { ChronologyEntry } from "../../components/common/ChronologyEntry"
import { EntryList } from "../../components/common/EntryList"
import { ProjectInfo } from "../../components/common/models"
import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"

const projectsInfo = [
    {
        title: "Pizzeria site CMS", githubUrl: "https://github.com/e-lawniczak/Cms.git", description: <>This poroject's aim was to create functional CMS. Together with my friend we created this from scratch using .NET and React. Logged user can manage the contents of the site such as images, text, titles, links, amount of elements in specific sections. My tasks were front-end focused. I was responsible for implementing visual design and making it possible for the user to make API calls needed to manage the site. I implemented everything that is on the front-end side.
        </>,
        techStack: [
            { techName: "React" },
            { techName: "Typescript" },
            { techName: "JS" },
            { techName: "CSS" },
            { techName: "HTML" },
            { techName: ".NET" },
            { techName: "C#" },
        ]
    },
    {
        title: "Heroes of Might & Magic - Uni Style Prototype", githubUrl: "https://github.com/software-wizard/UAM_ZIMA_2022_v2.git", description: <>During my OOP classes we were tasked to recreate basic mechanics of HoMM game in JAVA as a group in TDD development technique. We were split up in groups of 2 to 3 people. Together with my friend I was responsible for implementing map fields & map generation. We sucessfuly implemented impassable obstacles, destroyable obstacles, fields that do damage, and we prepared field type that would buff or debuff units that pass trough. Fields were implemented using abstraction, and factory pattern.
            <br /><br />
            Aside form fields we also implemented separate map creator gui, that allows user to create battle maps with special fields and export it to JSON format. They could also be further read in battle-gui to change the map.
        </>,
        techStack: [
            { techName: "JAVA" },
            { techName: "JavaFX" },
            { techName: "Maven" },
        ]
    },

] as ProjectInfo[]

export default () => {
    return <BasePage pageCssClass="projects-page">
        <div className="wrapper">
            <PageTitle>projects</PageTitle>
            <EntryList className={"project-list"} turnOffMarks={true}>
                {projectsInfo.map(p => <ChronologyEntry info={p} entryType={"pro"} />)}
            </EntryList>
        </div>
    </BasePage>
}
