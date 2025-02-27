import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"
import { SocialLinks } from "../../components/layout/Header"
import './_contact.scss'
export default () => {
    return <BasePage pageCssClass="contact-page">
        <div className="wrapper">
            <PageTitle>contact</PageTitle>
            <div className="contact">
                    <h3>Social media</h3>
                    <SocialLinks />
                    <h3>Email</h3>
                    <a className="mail-link" href="mailto:eryk.lawniczak@gmail.com">eryk.lawniczak@gmail.com</a>
            </div>
        </div>
    </BasePage>
}
