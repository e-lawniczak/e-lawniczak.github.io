import { NavLink } from "react-router-dom"
import '../../styles/_header.scss'
import { useEffect, useState } from "react"
export const Header = () => {
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

    return <header className={["site-header"].join(" ")}>
        <div className="wrapper">

            <div className="social-links">
                <a target="blank" href="https://www.linkedin.com/in/eryk-%C5%82awniczak-289b22196/" className={`social-link ${mode}-mode linked-in`}></a>
                <a target="blank" href="https://github.com/e-lawniczak" className={`social-link ${mode}-mode git`}></a>
                <a target="blank" href="mailto:eryk.lawniczak@gmail.com" className={`social-link ${mode}-mode email`}></a>
            </div>

        </div>
    </header>
}