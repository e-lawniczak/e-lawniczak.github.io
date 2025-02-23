import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"
import { SkillEntry } from "../../components/common/models"
import "./_skills.scss"
const skills = [
    { skill: "C#", exp: "Using at work", section: "scripting" },
    { skill: "JavaScript", exp: "Using at work", section: "scripting" },
    { skill: "HTML", exp: "Using at work", section: "scripting" },
    { skill: "JAVA", exp: "Used at uni", section: "scripting" },
    { skill: "Python", exp: "Used at uni", section: "scripting" },
    { skill: "C++", exp: "Used at uni", section: "scripting" },

    { skill: "React", exp: "Using at work", section: "web" },
    { skill: "Typescript", exp: "Using at work", section: "web" },
    { skill: "CSS/SCSS", exp: "Using at work", section: "web" },
    { skill: "ASP.NET", exp: "Using at work", section: "web" },
    { skill: "Razor Pages", exp: "Using at work", section: "web" },
    { skill: "Azure DevOps", exp: "Using at work", section: "web" },
    { skill: "Docker", exp: "Used at uni & personally", section: "web" },
    { skill: "Spring framework", exp: "Used at uni", section: "web" },

    { skill: "Unity", exp: "Used at uni & personally", section: "engine" },
    { skill: "Unreal", exp: "Used at uni & personally", section: "engine" },
    { skill: "Godot", exp: "Used at uni & personally", section: "engine" },

    { skill: "SQL, MsSQL, Posgress", exp: "Using personally & at work", section: "other" },
    { skill: "Git", exp: "Using personally & at work", section: "other" },
    { skill: "Jira/ClickUp", exp: "Used at uni", section: "other" },
    { skill: "Maven", exp: "Used at uni", section: "other" },
    { skill: "Gradle", exp: "Used at uni", section: "other" },

    { skill: "Polish C2/Native", exp: "Using personally & at work", section: "langs" },
    { skill: "English C1", exp: "Using personally & at work", section: "langs" },


] as SkillEntry[]

export default () => {
    return <BasePage pageCssClass="skills-page">
        <div className="wrapper">
            <PageTitle>skills</PageTitle>
            <div className="skill-table">
                <div className="section-name">
                    <h2>Programming & scripting languages</h2>
                </div>
                <div className="tr">
                    <div className="th">Skill</div><div className="th">Experience</div>
                </div>
                {skills.filter(s => s.section == "scripting").map((s, idx) => {
                    return <SkillRow key={idx} data={s} idx={idx} />
                })}
                <div className="section-name">
                    <h2>Web technologies</h2>
                </div>
                <div className="tr">
                    <div className="th">Skill</div><div className="th">Experience</div>
                </div>
                {skills.filter((s, idx) => s.section == "web").map((s, idx) => {
                    return <SkillRow key={idx} data={s} idx={idx} />
                })}
                <div className="section-name">
                    <h2>Game engines</h2>
                </div>
                <div className="tr">
                    <div className="th">Skill</div><div className="th">Experience</div>
                </div>
                {skills.filter(s => s.section == "engine").map((s, idx) => {
                    return <SkillRow key={idx} data={s} idx={idx} />
                })}
                <div className="section-name">
                    <h2>Other</h2>
                </div>
                <div className="tr">
                    <div className="th">Skill</div><div className="th">Experience</div>
                </div>
                {skills.filter(s => s.section == "other").map((s, idx) => {
                    return <SkillRow key={idx} data={s} idx={idx} />
                })}
                <div className="section-name">
                    <h2>Languages</h2>
                </div>
                <div className="tr">
                    <div className="th">Skill</div><div className="th">Experience</div>
                </div>
                {skills.filter(s => s.section == "langs").map((s, idx) => {
                    return <SkillRow key={idx} data={s} idx={idx} />
                })}
            </div>
        </div>
    </BasePage>
}

const SkillRow = (props: { data: any, idx: number }) => {
    console.log(props.idx);
    return <div className={`tr ${props.idx % 2 == 0 ? "even" : "odd"}`}>
        <div className="td">
            {props.data.skill}
        </div>
        <div className="td">
            {props.data.exp}
        </div>
    </div>
}