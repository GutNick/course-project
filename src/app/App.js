import "./style.pcss"
import "../widgets/header/style.pcss"
import HeaderModel from "../widgets/header/model/index.js";

const runApp = async () => {
    const runWidgets = () => { //TODO listener на document ready state
        new HeaderModel()
    }
    switch (process.env.NODE_ENV) {
        case "development":
            await import("../shared/api/browser.js")
                .then(async ({ worker }) => {
                    await worker.start().then(() => {
                        console.debug("App dev run")
                        runWidgets()
                    })
                })
    }
}

runApp()
    .catch((err) => {
        console.error(err)
    })
