// import { ProjectInfo } from "../../components/common/models"
import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"

// const projectsInfo = [
//     {},
//     {},
//     {},
//     {},
// ] as ProjectInfo[]

export default () => {
    return <BasePage pageCssClass="projects-page">
        <div className="wrapper">
            <PageTitle>projects</PageTitle>
        </div>
    </BasePage>
}
