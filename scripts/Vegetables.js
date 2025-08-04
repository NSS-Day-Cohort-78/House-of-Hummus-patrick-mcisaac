import { setVegetableId } from "./TransientState.js"

export const Veggies = async () => {
  document.addEventListener("change", eventHandler)

  const response = await fetch("http://localhost:8088/vegetables")
  const vegetables = await response.json()

  return vegetables
    .map((veggie) => {
      return `
        <label>
            <input type='radio' name='veggie' value='${veggie.id}'>
            ${veggie.type}
        </label>
        `
    })
    .join("")
}

const eventHandler = (e) => {
  if (e.target.name === "veggie") {
    setVegetableId(parseInt(e.target.value))
  }
}
