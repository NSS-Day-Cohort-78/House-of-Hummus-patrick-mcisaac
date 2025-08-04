import { setSideId } from "./TransientState.js"

export const Sides = async () => {
  document.addEventListener("change", eventHandler)

  const response = await fetch("http://localhost:8088/sides")
  const sides = await response.json()

  return sides
    .map((side) => {
      return `
    <label>
        <input type='radio' name='side' value='${side.id}'>
        ${side.title}
    </label>
    `
    })
    .join("")
}

const eventHandler = (e) => {
  if (e.target.name === "side") {
    setSideId(parseInt(e.target.value))
  }
}
