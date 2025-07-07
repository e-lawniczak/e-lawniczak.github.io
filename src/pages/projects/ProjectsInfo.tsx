import { ProjectInfo } from "../../components/common/models";

export const projectsInfo = [
    {
        title: "LangCard ", githubUrl: "https://github.com/e-lawniczak/langcard-pp.git", description: <>LangCard is my largest non comercial project to date. We finished it as a group of 5 as part of our Engineer's Degree. It is an online language learning platform that features a variety of exercices that help revise and memorize vocabulary in English, German, Spanish and French.<br /> <br />

            It features teacher/student type accounts and allows for creating classes that students can join that have separate Learning Units and exercises inside those units. Process of creating exercises is enchaced by OCR, automatic word translation that can be manually changed if needed and periodic systematical exercise generation. The system can also generate reports with scores and student performance for further human analysis.
            <br /> <br />
            My job in this project was to create the core of front-end application in <b>React</b> featuring routing, site behaviour and base components. I've also created mechanism behind crossout puzzle and scrambled words exercise.


        </>,
        techStack: [
            { techName: "React" },
            { techName: "Typescript" },
            { techName: "JAVA" },
            { techName: "Spring" },
            { techName: "Gradle" },
        ],
        type: "JAVA"
    },
    {
        title: "Pizzeria CMS", githubUrl: "https://github.com/e-lawniczak/Cms.git",
        description: <>
            This poroject's aim was to create functional <b>CMS</b>. Together with my friend we created this from scratch using <b>.NET</b> and <b>React</b>. Logged user can manage the contents of the site such as images, text, titles, links, amount of elements in specific sections.<br /> <br /> My tasks were front-end focused. I was responsible for implementing visual design and making it possible for the user to make API calls needed to manage the site. I implemented everything that is on the front-end side.
        </>,
        techStack: [
            { techName: "React" },
            { techName: "Typescript" },
            { techName: "C#" },
            { techName: ".NET" },
        ],
        type: "C#"
    },
    {
        title: "Turn based game prototype", githubUrl: "",
        description: <>
            During my OOP classes we were tasked to recreate basic mechanics of HoMM game in <b>JAVA</b> as a group in <b>TDD</b> development technique. We were split up in groups of 2 to 3 people. Together with my friend I was responsible for implementing map fields & map generation. We sucessfuly implemented impassable obstacles, destroyable obstacles, fields that do damage, and we prepared field type that would buff or debuff units that pass trough. Fields were implemented using abstraction, and <b>factory pattern</b>.
            <br /><br />
            Aside form fields we also implemented separate map creator gui, that allows user to create battle maps with special fields and export it to JSON format. They could also be further read in battle-gui to change the map.
        </>,
        techStack: [
            { techName: "JAVA" },
            { techName: "JavaFX" },
            { techName: "Maven" },
        ],
        type: "JAVA"
    },
    {
        title: "PlantHub", githubUrl: "https://github.com/e-lawniczak/plant-hub.git",
        description: <>
            Project made in group of 3 as part of Mobile Systems course. It's a prototype of web application that allows it's users to share plants. Like any trading platform it allows it's users to post offers with details of a plant, description and location allowing to exchange unwanted plants and help preserving them.
            <br /><br />
            My job in the project was creting both front-end and back-end part of CRUD regarding offers and images attached to those offers, liking users. I was also responsible for creting basic components and core project parts such as routing on the front-end side.
        </>,
        techStack: [
            { techName: "React" },
            { techName: "Typescript" },
            { techName: "JAVA" },
            { techName: "Spring" },
            { techName: "Maven" },
        ],
        type: "JAVA"
    },
    {
        title: "Jamming UP", githubUrl: "https://github.com/e-lawniczak/JammingUp.git",
        description: <>
            My first successful Game-Jam entry. As a Part of <a href="https://itch.io/jam/mini-jam-136-cycles">Mini Jam 136</a> I created this simple arcade game in Unity with a little help of my friend.
        </>,
        techStack: [
            { techName: "Unity" },
            { techName: "C#" },
        ],
        type: "C#"
    }

] as ProjectInfo[]