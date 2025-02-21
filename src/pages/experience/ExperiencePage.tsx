import { ChronologyEntry } from "../../components/common/ChronologyEntry"
import { EntryList } from "../../components/common/EntryList"
import { WorkInfo } from "../../components/common/models"
import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"


const workInfo = [
    {
        title: "Fullstack Web Developer", dateStart: new Date('06-01-2019'), dateEnd: null, company: "Thinq sp. z o.o.", workplaceLogo: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus sint nam nobis maiores, non maxime soluta voluptas harum iste magnam nesciunt, vero nemo eaque consequatur tempore, commodi id accusantium?",
        techStack: [
            { techName: "React" },
            { techName: "Typescript" },
            { techName: "HTML" },
            { techName: "JS" },
            { techName: "CSS" },
            { techName: "C#" },
            { techName: "ASP.NET" },
            { techName: "Azure Dev Ops" },
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
