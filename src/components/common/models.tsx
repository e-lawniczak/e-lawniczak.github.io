export interface ProjectPage {
    name: string,
    path: string,
    className?: string,
    label?: string,
    element: any,
}

export interface IChronologyEntry {
    dateStart?: Date | null,
    dateEnd?: Date | null,
    title: string
}
export interface TechStack {
    techName: string,
    techIcon?: string
}
export interface EducationInfo extends IChronologyEntry {
    degree: string,
    institution: string,
    major?: string
}
export interface WorkInfo extends IChronologyEntry {
    company: string,
    description: any,
    techStack: TechStack[],
    workplaceLogo: string,
}
export interface ProjectInfo extends IChronologyEntry {
    githubUrl: string,
    description: any,
    techStack: TechStack[]
}