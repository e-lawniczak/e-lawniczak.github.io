export const Copy = (props: { className?: string }) => {
    return <div className={["copy", props.className].join(" ")}>
        &copy; Eryk Ławniczak 2025, All rights reserved.
    </div>
}