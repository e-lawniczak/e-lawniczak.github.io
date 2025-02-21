export const Copy = (props: { className?: string }) => {
    return <div className={["copy", props.className].join(" ")}>
        &copy; Eryk Ławniczak 2025, All rights reserved. <br />Do not sell my personal information. Do not share my personal information for purposes other than recruitment.
    </div>
}