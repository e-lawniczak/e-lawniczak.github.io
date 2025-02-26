import { IChronologyEntry, EducationInfo, ProjectInfo, TechStack, WorkInfo } from "./models";
import '../../styles/_chronologyEntry.scss'
import { useEffect, useState } from "react";

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

        <TechStackRow stack={info.techStack} />
        <button className="show-desc" onClick={() => setShow(!showDesc)}>{showDesc ? "Hide" : "Show"} description</button>
        {showDesc ? <p onClick={() => setShow(false)} className="description">{info.description}</p> : null}
    </>
}
const TechStackRow = (props: { stack: TechStack[] }) => {
    return <>
        <div className="tech-stack">
            {props.stack.map(t => <span className="tech">{t.techName}</span>)}
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

    const [mode, setMode] = useState('light')
    const onSelectMode = (mode: string) => {
        setMode(mode)

    }
    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onSelectMode(e.matches ? 'dark' : 'light'));
        onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
            });
        }
    }, []);



    return <div className="entry-container">
        <div className="entry-side-line"></div>
        <div className={[`entry`, className, `${entryType}-entry`].join(" ")}>
            <div className="top">
                <div className="entry-title">
                    {
                        !(info as ProjectInfo)?.githubUrl ?
                            <h3>{chrInfo.title}</h3> :
                            <a target="_blank" href={(info as ProjectInfo)?.githubUrl}><h3>{chrInfo.title}</h3></a>
                    }
                    {(info as ProjectInfo)?.githubUrl && <a target="_blank" href={(info as ProjectInfo)?.githubUrl} className={`social-link ${mode}-mode git`}></a>}
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