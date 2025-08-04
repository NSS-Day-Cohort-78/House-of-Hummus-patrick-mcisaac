import { setEntreeId } from "./TransientState.js"

export const Entrees = async () => {
  document.addEventListener("change", eventHandler)

  const response = await fetch("http://localhost:8088/entrees")
  const entrees = await response.json()

  return entrees
    .map((entree) => {
      return `
    <label>
        <input type='radio' name='entree' value='${entree.id}'>
        ${entree.name}
    </label>
    `
    })
    .join("")
}

//Event handler to update state

const eventHandler = (e) => {
  if (e.target.name === "entree") {
    setEntreeId(parseInt(e.target.value))
  }
}
