export const Sales = async () => {
  const sales = await fetch(
    "http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side"
  ).then((res) => res.json())

  console.log(sales.length)

  if (sales.length > 0) {
    let salesDivs = sales.map((sale) => {
      const total = sale.entree.price + sale.side.price + sale.vegetable.price

      return `
        <p>Receipt #${sale.id} = ${total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}</p>
        `
    })

    salesDivs = salesDivs.join("")

    return salesDivs
  } else {
    return ""
  }
}
