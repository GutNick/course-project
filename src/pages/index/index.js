import { getPage } from "../../shared/lib/index.js";
import { Button } from "../../shared/ui/button/index.js";

export default () => {

    return getPage({
        title: "Главная",
        body: `
            <h1>Главная</h1>
            ${Button({
            label: "Тест",
            extraAttrs: {
                "data-js-require": true,
                "id": "btn"
            },
            extraClasses: {
                isHidden: true,
                isDisabled: true,
            }
        })}
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/about.html">О Нас</a>
                    </li>
                </ul>
            </nav>
        `
    })
}

