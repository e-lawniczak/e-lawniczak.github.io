import { BasePage } from "../../components/layout/BasePage"

export default () => {
    return <BasePage pageCssClass="home-page">
        <div className="wrapper">
            <h1>Hi! My name is Eryk Ławniczak</h1>
            <ul>
                <li><a href="https://colorlib.com/wp/template/jackson/">portfolio 1</a></li>
                <li><a href="https://josenk.notion.site/JoseNK-Game-Designer-and-GameDev-resource-creator-82db7c726e154f24870b4aa80945c82c">portfolio 2</a></li>
                <li><a href="https://preview.themeforest.net/item/devour-game-developer-elementor-template-kit/full_screen_preview/39157332?_ga=2.74426836.73481559.1724145237-434065188.1724145237">portfolio 3</a></li>
            </ul>
        </div>
    </BasePage>
}
