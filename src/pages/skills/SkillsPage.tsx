import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"
import { SkillEntry } from "../../components/common/models"

const skills = [
    { skill: "C#", exp: "Using at work", section: "scripting" },
    { skill: "JavaScript", exp: "Using at work", section: "scripting" },
    { skill: "JavaScript", exp: "Using at work", section: "scripting" },
] as SkillEntry[]

export default () => {
    return <BasePage pageCssClass="skills-page">
        <div className="wrapper">
            <PageTitle>skills</PageTitle>
            <div className="skill-table">
                <div className="section-name">
                    Programming languages
                </div>
                <div className="tr">
                    <div className="th">
                        Skill
                    </div>

                    <div className="th">
                        Experience
                    </div>
                </div>
                {skills.filter(s => s.section == "scripting").map(s => {
                    return <div className="tr">
                        <div className="td">
                            {s.skill}
                        </div>
                        <div className="td">
                            {s.exp}
                        </div>
                    </div>
                })}
            </div>
        </div>
    </BasePage>
}
