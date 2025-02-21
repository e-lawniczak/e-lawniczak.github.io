export const EntryList = (props: { className: string, children: any, startOverride?: string, turnOffMarks?: boolean }) => {
    const { turnOffMarks = false } = props;
    return <div className={["entry-list", props.className].join(" ")}>
        {!turnOffMarks && <div className="global-mark present">present</div>}
        {props.children}
        {!turnOffMarks && <div className="global-mark start">{props.startOverride ? props.startOverride : 2019}</div>}
    </div>
}