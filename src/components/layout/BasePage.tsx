import { useEffect } from "react";
import { Footer } from "./Footer"
import { Header } from "./Header"
import { useSearchParams } from "react-router-dom";

export const BasePage = (props: { children: any, pageCssClass: string, [x: string]: any }) => {
    const
        { children, pageCssClass } = props,
        [searchParams] = useSearchParams();


    useEffect(() => {
        console.log(searchParams);
        console.log(searchParams.get("xd"));
    }, [])
    return <div className={["page", pageCssClass].join(" ")}>
        <Header />
        <div className="page-content">
            {children}
        </div>
        <Footer />
    </div>
}