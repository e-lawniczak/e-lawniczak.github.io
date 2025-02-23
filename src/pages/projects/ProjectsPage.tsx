import { ChronologyEntry } from "../../components/common/ChronologyEntry"
import { EntryList } from "../../components/common/EntryList"
import { ProjectInfo } from "../../components/common/models"
import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"

const projectsInfo = [
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
