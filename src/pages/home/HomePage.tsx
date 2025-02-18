import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"

export default () => {
    return <BasePage pageCssClass="home-page">
        <div className="wrapper">
            <PageTitle>About</PageTitle>
        </div>
    </BasePage>
}
