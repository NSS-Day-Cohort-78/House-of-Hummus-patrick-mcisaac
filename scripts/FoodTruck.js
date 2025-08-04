import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { Sales } from "./Sales.js"
import { PurchaseButton } from "./PurchaseButton.js"

export const FoodTruck = async () => {
  const entreHTML = await Entrees()
  const veggieHTML = await Veggies()
  const sidesHTML = await Sides()
  const purchaseBtnHTML = PurchaseButton()
  const salesHTML = await Sales()

  return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <section class="form">

            <article class='options'>
                <h2>Base Dish</h2>
                ${entreHTML}
            </article>

            <article class='options'>
                <h2>Vegetables</h2>
                ${veggieHTML}
            </article>

            <article class='options'>
                <h2>Sides</h2>
                ${sidesHTML}
            </article>

            <article class='button-article'>
                ${purchaseBtnHTML}
            </article>

        </section>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
