import { NavLink } from "react-router-dom"
import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"
import './_home.scss'
export default () => {
    return <BasePage pageCssClass="home-page">
        <div className="wrapper">
            <div className="quick-links">
                <h3>Important stuff:</h3>
                <NavLink to={"/Experience"}>Expierience</NavLink>
                <NavLink to={"/Skills"}>Skills</NavLink>
                <NavLink to={"/Projects"}>Projects</NavLink>
            </div>
            <PageTitle>About</PageTitle>
            <p>
                Hey! I'm Eryk, a passionate <b>software developer</b>, uni grad with <b>master's degree</b> in computer science complete with IT technichan education from technical college.
            </p>
            <p>
                I am passionate problem-solver with all-round education in most of the popular programming languages. From <b>C/C++</b> trough <b>C#</b> and <b>JAVA</b> to <b>JavaScript</b> and <b>Python</b>.
            </p>
            <p>
                During my uni I was working part-time as a fullstack developer at Thinq. Working with technologies like <b>.NET</b>, <b>ASP.NET</b>, <b>React</b>, <b>Azure Dev Ops</b>, <b>Git</b> and many more.
            </p>
            <p>
                I never stop learning and I take every opportunity to develop my skills wether they are technical or soft skills. I started weekend part-time studies with psychology as my major.
            </p>
            <p>
                With my hollistic education I bring more than just a bootcamp knowledge restricted to one technology and programming language. I treat technologies as tools to get the job done. Strong problem-solving and algorithmic thinking skills are the backbone of my day to day work.
            </p>
        </div>
    </BasePage>
}
