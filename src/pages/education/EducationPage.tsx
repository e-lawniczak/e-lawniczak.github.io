import { ChronologyEntry } from "../../components/common/ChronologyEntry"
import { EntryList } from "../../components/common/EntryList"
import { EducationInfo } from "../../components/common/models"
import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"

const eduInfo = [
    { title: "Master's degree", institution: "Poznań University of Technology, Faculty of Computing and Telecommunications", major: "Information and Communication Technology, Games & Internet Technologies", degree: "Master Engineer", dateStart: new Date('02-10-2023'), dateEnd: new Date("07-03-2024") },
    { title: "Engineer's degree", institution: "Adam Mickiewicz University, Poznań, Faculty of Mathematics and Computer Science", major: "Computer Science", degree: "Engineer", dateStart: new Date('10-01-2019'), dateEnd: new Date("02-10-2023") },
    { title: "Techinchan", institution: "Technical College, Hipolit Cegielski School Complex of Communication in Poznań", major: "Information Techology", degree: "IT Technichan", dateStart: new Date('09-01-2014'), dateEnd: new Date("04-26-2019") },
] as EducationInfo[]

export default () => {
    return <BasePage pageCssClass="education-page">
        <div className="wrapper">
            <PageTitle>Education</PageTitle>
            <EntryList className="education-info" startOverride="2014">
                {eduInfo.map(e => <ChronologyEntry info={e} entryType={"edu"} />)}
            </EntryList>
        </div>
    </BasePage>
}
