import { Header } from "../widgets/header/index.js";
import { Footer } from "../widgets/footer/index.js";

export const getPage = (nodeElement) => {
  return `
  ${Header}
  ${nodeElement}
  ${Footer}
  `
}
