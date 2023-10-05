import "./style.pcss"
import { worker } from "../shared/api/browser.js"
if (process.env.NODE_ENV === "development") {
  worker.start()
}
import { Header } from "/src/widgets/header"
import { Footer } from "/src/widgets/footer";
let pageContent
import { getPage } from "../shared/lib/index.js";
switch (window.location.pathname) {
  case "/test":
    pageContent = `<h1>Тест!</h1>`
    break
  case "/":
    pageContent = `<h1>Главная!</h1>`
    break
  default:
    pageContent = `<h1>404</h1>`
}
const nodeElement = getPage(Header, Footer, pageContent)
document.querySelector("body").insertAdjacentHTML("afterbegin", nodeElement)

