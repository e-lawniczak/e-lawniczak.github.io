import{j as e,r as o}from"./index-DZVKYTb1.js";import{E as c,C as h}from"./EntryList-CZHv0_Lt.js";import{B as l,P as m}from"./BasePage-eEX8YR9M.js";const s=[{title:"LangCard Engineer Degree Project",githubUrl:"https://github.com/e-lawniczak/langcard-pp.git",description:e.jsxs(e.Fragment,{children:["LangCard is my largest non comercial project to date. We finished it as a group of 5 as part of our Engineer's Degree. It is an online language learning platform that features a variety of exercices that help revise and memorize vocabulary in English, German, Spanish and French.",e.jsx("br",{})," ",e.jsx("br",{}),"It features teacher/student type accounts and allows for creating classes that students can join that have separate Learning Units and exercises inside those units. Process of creating exercises is enchaced by OCR, automatic word translation that can be manually changed if needed and periodic systematical exercise generation. The system can also generate reports with scores and student performance for further human analysis.",e.jsx("br",{})," ",e.jsx("br",{}),"My job in this project was to create the core of front-end application in ",e.jsx("b",{children:"React"})," featuring routing, site behaviour and base components. I've also created mechanism behind crossout puzzle and scrambled words exercise."]}),techStack:[{techName:"React"},{techName:"Typescript"},{techName:"JS"},{techName:"CSS"},{techName:"HTML"},{techName:"Spring"},{techName:"Gradle"}],type:"web"},{title:"Pizzeria site CMS",githubUrl:"https://github.com/e-lawniczak/Cms.git",description:e.jsxs(e.Fragment,{children:["This poroject's aim was to create functional ",e.jsx("b",{children:"CMS"}),". Together with my friend we created this from scratch using ",e.jsx("b",{children:".NET"})," and ",e.jsx("b",{children:"React"}),". Logged user can manage the contents of the site such as images, text, titles, links, amount of elements in specific sections.",e.jsx("br",{})," ",e.jsx("br",{})," My tasks were front-end focused. I was responsible for implementing visual design and making it possible for the user to make API calls needed to manage the site. I implemented everything that is on the front-end side."]}),techStack:[{techName:"React"},{techName:"Typescript"},{techName:"JS"},{techName:"CSS"},{techName:"HTML"},{techName:".NET"},{techName:"C#"}],type:"web"},{title:"Heroes of Might & Magic - Uni Style Prototype",githubUrl:"",description:e.jsxs(e.Fragment,{children:["Due to security settings I cannot link the source code.",e.jsx("br",{}),e.jsx("br",{}),"During my OOP classes we were tasked to recreate basic mechanics of HoMM game in ",e.jsx("b",{children:"JAVA"})," as a group in ",e.jsx("b",{children:"TDD"})," development technique. We were split up in groups of 2 to 3 people. Together with my friend I was responsible for implementing map fields & map generation. We sucessfuly implemented impassable obstacles, destroyable obstacles, fields that do damage, and we prepared field type that would buff or debuff units that pass trough. Fields were implemented using abstraction, and ",e.jsx("b",{children:"factory pattern"}),".",e.jsx("br",{}),e.jsx("br",{}),"Aside form fields we also implemented separate map creator gui, that allows user to create battle maps with special fields and export it to JSON format. They could also be further read in battle-gui to change the map."]}),techStack:[{techName:"JAVA"},{techName:"JavaFX"},{techName:"Maven"}],type:"all"},{title:"PlantHub",githubUrl:"https://github.com/e-lawniczak/plant-hub.git",description:e.jsxs(e.Fragment,{children:["Project made in group of 3 as part of Mobile Systems course. It's a prototype of web application that allows it's users to share plants. Like any trading platform it allows it's users to post offers with details of a plant, description and location allowing to exchange unwanted plants and help preserving them.",e.jsx("br",{}),e.jsx("br",{}),"My job in the project was creting both front-end and back-end part of CRUD regarding offers and images attached to those offers, liking users. I was also responsible for creting basic components and core project parts such as routing on the front-end side."]}),techStack:[{techName:"React"},{techName:"Typescript"},{techName:"JS"},{techName:"CSS"},{techName:"HTML"},{techName:"JAVA"},{techName:"Springboot Framework"},{techName:"Maven"}],type:"web"},{title:"Jamming UP",githubUrl:"https://github.com/e-lawniczak/JammingUp.git",description:e.jsxs(e.Fragment,{children:["My first successful Game-Jam entry. As a Part of ",e.jsx("a",{href:"https://itch.io/jam/mini-jam-136-cycles",children:"Mini Jam 136"})," I created this simple arcade game in Unity with a little help of my friend."]}),techStack:[{techName:"Unity"},{techName:"C#"}],type:"game"},{title:"Single level shooter",githubUrl:"https://github.com/e-lawniczak/shooter.git",description:e.jsx(e.Fragment,{children:"Unity made shooter prototype. My first Unity project."}),techStack:[{techName:"Unity"},{techName:"C#"}],type:"game"},{title:"Shoot'em Up SDL2 Learning",githubUrl:"https://github.com/e-lawniczak/ShootEmUp.git",description:e.jsxs(e.Fragment,{children:["Before my first Game-Jam due to the team I assembled I had to learn how to use basics of SDL2 library.",e.jsx("br",{})," ",e.jsx("br",{}),"This projects is a recreation of Shot'em Up tutorial."]}),techStack:[{techName:"C++"},{techName:"SDL2"}],type:"game"}],u=()=>{const[a,r]=o.useState("web"),i=["web","game","all"],n=a!="all"?s.filter(t=>t.type==a||t.type=="all"):s;return e.jsx(l,{pageCssClass:"projects-page",children:e.jsxs("div",{className:"wrapper",children:[e.jsx(m,{children:"projects"}),e.jsxs("div",{className:"tabs",children:[e.jsx("span",{children:"Filter projects:"}),i.map(t=>e.jsx("div",{className:`tab ${t}-tab ${t==a&&"current"}`,onClick:()=>r(t),children:t}))]}),e.jsx(c,{className:"project-list",turnOffMarks:!0,children:n.map(t=>e.jsx(h,{info:t,entryType:"pro"}))})]})})};export{u as default};
