import { IChronologyEntry, EducationInfo, ProjectInfo, TechStack, WorkInfo } from "./models";
import '../../styles/_chronologyEntry.scss'
import { useState } from "react";

interface Entry {
    info: EducationInfo | WorkInfo | ProjectInfo,
    className?: string
    entryType: "edu" | "wrk" | "pro"
}

const EducationEntry = (props: { info: EducationInfo, className?: string }) => {
    const
        { info } = props;
    return < >
        <h4>{info.institution}</h4>
        <p>{`${info.degree}, ${info.major}`}</p>

    </>
}
const WorkEntry = (props: { info: WorkInfo, className?: string, }) => {
    const
        { info } = props;
    return <>
        <TechStackRow stack={info.techStack} />
        <div className="wrk">
            <h4>{info.company}</h4>
            <p>{info.description}</p>
        </div>

    </>
}
const ProjectEntry = (props: { info: ProjectInfo, className?: string }) => {
    const
        { info } = props,
        [showDesc, setShow] = useState(false)

    return <>
        {info.githubUrl.length > 0 && <span>GitHub link: <a href={info.githubUrl}>{info.githubUrl}</a></span>}
        <TechStackRow stack={info.techStack} />
        <button className="show-desc" onClick={() => setShow(!showDesc)}>{showDesc ? "Hide" : "Show"} description</button>
        {showDesc ? <p onClick={() => setShow(false)} className="description">{info.description}</p> : null}
    </>
}
const TechStackRow = (props: { stack: TechStack[] }) => {
    return <>
        <div className="tech-stack">
            <b>Tech Stack:</b>
            {props.stack.map(t => t.techName).join(", ")}
        </div>
    </>
}
export const ChronologyEntry = (props: Entry) => {
    const
        { info, className, entryType } = props,
        chrInfo = info as IChronologyEntry,
        entryContentClass = `${entryType}-entry-content`,
        entryContent =
            entryType == "edu" ? <EducationEntry info={info as EducationInfo} className={entryContentClass} /> :
                entryType == "pro" ? <ProjectEntry info={info as ProjectInfo} className={entryContentClass} /> :
                    <WorkEntry info={info as WorkInfo} className={entryContentClass} />,
        yearStart = !!chrInfo?.dateStart ? chrInfo.dateStart.getFullYear() : null,
        yearEnd = !!chrInfo?.dateEnd ? chrInfo.dateEnd.getFullYear() : null,
        monthStart = !!chrInfo?.dateStart ? chrInfo.dateStart.toLocaleString('en', { month: 'short' }) : null,
        monthEnd = !!chrInfo?.dateEnd ? chrInfo.dateEnd.toLocaleString('en', { month: 'short' }) : null,
        entryDate = !!chrInfo?.dateEnd ? `${monthStart} ${yearStart} - ${monthEnd} ${yearEnd}` : `${monthStart} ${yearStart} - present`



    return <div className="entry-container">
        <div className="entry-side-line"></div>
        <div className={[`entry`, className, `${entryType}-entry`].join(" ")}>
            <div className="top">
                <div className="entry-title">
                    <h3>{chrInfo.title}</h3>
                </div>
                <div className="entry-date">
                    {!!chrInfo.dateStart && entryDate}
                </div>
            </div>
            {/* <div className={["entry-content", entryContentClass].join(" ")}> */}
            {entryContent}
            {/* </div> */}
        </div>
    </div>
}