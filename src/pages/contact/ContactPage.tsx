import { PageTitle } from "../../components/common/PageTitle"
import { BasePage } from "../../components/layout/BasePage"
import { SocialLinks } from "../../components/layout/Header"
import './_contact.scss'
export default () => {
    return <BasePage pageCssClass="contact-page">
        <div className="wrapper">
            <PageTitle>contact</PageTitle>
            <p>
                <h3>Media links</h3>
                <SocialLinks />
            </p>
            <p>
                <h3>Email</h3>
                <a className="mail-link" href="mailto:eryk.lawniczak@gmail.com">eryk.lawniczak@gmail.com</a>
            </p>
        </div>
    </BasePage>
}
