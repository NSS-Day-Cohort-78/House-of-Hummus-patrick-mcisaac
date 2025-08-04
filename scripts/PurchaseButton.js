import { updatePurchasesData } from "./TransientState.js"

export const PurchaseButton = () => {
  document.addEventListener("click", handleEvent)
  return `
    <button id="purchase">Purchase Combo</button>
    `
}

// event listener for button
const handleEvent = async (e) => {
  if (e.target.id === "purchase") {
    await updatePurchasesData()
    const myEvent = new CustomEvent("updatedState")
    document.dispatchEvent(myEvent)
  }
}
