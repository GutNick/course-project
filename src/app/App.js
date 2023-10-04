import "./style.pcss"
import { worker } from "../shared/api/browser.js"
if (process.env.NODE_ENV === "development") {
  worker.start()
}
import { getPage } from "./index.js";
const element = getPage(`<h1>Hello, world!</h1>`)
document.querySelector("body").insertAdjacentHTML("afterbegin", element)

