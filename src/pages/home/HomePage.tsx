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
                <NavLink to={"/Projects"}>Projects</NavLink>
            </div>
            <PageTitle>About me</PageTitle>
            <p>
                Hey! I'm Eryk, a passionate <b>software developer</b>, uni grad with <b>master's degree</b> in computer science complete with IT technichan education from technical college.
            </p>
            <p>
                I am a problem-solver with all-round education in most of the popular programming languages. From <b>C/C++</b> trough <b>C#</b> and <b>JAVA</b> to <b>JavaScript</b> and <b>Python</b>.
            </p>
            <p>
                During my uni I was working part-time as a fullstack developer at Thinq. I was working with technologies like <b>.NET</b>, <b>ASP.NET</b>, <b>React</b>, <b>Azure Dev Ops</b>, <b>Git</b> and many more.
            </p>
            <p>
                I never stop learning and I take every opportunity to develop my skills wether they are technical or soft skills. I started weekend part-time studies with psychology as my major.
            </p>
            <p>
                With my hollistic education I bring more than just a bootcamp knowledge restricted to one technology and programming language. I treat technologies as tools to get the job done. Strong problem-solving and algorithmic thinking skills are the backbone of my day to day work.
            </p>
            <h3>Main skills</h3>
            <p>
                Troughout my education and work I've worked with a lot o languages and technologies. I feel confident in learning and using any of them but I prefer working mainly with:
                <ul>
                    <li><b>React/Typescript/JavaScript</b></li>
                    <li><b>C#</b></li>
                    <li><b>JAVA</b></li>
                </ul>
            </p>
            <p>Developing many applications over many years I obviously am proficient with <b>SQL</b>, <b>Git</b>, <b>Docker</b> and <b>agile</b> practices</p>
            <h3>My focus & motivations</h3>
            <p>
                I am looking to improve my programming skills working closely with code. Positions such as backend developer or software developer that will help me improve in languages such as C# or JAVA are my key points of interest in my career.
            </p>
            <p>
                I'd like to become a part of a team and have my own responsibilities to take care of inside of it. Troughout my studies and in work environment I worked in teams of varying sizes from pairs to teams of 21 people all working on different parts of the same application.
            </p>
            <h3>Hobbies and interests</h3>
            <p>
                I'm intereted in a lot of things. In the back of my mind, there is always something new the I'd like to try. My current hobbies that take up most of my free time are tabletop roleplaying games such as D&D or Cthulu, video games, gym, and psychology. I attend university part-time on weekends with major in psychology.
            </p>
        </div>
    </BasePage>
}
