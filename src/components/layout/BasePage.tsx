import { Footer } from "./Footer"
import { Header } from "./Header"

export const BasePage = (props: { children: any, pageCssClass: string, [x: string]: any }) => {
    const
        { children, pageCssClass } = props
    return <div className={["page", pageCssClass].join(" ")}>
        <Header />
        <div className="page-content">
            {children}
        </div>
        <Footer />
    </div>
}