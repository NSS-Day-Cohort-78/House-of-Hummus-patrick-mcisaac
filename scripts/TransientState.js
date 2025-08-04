const transientState = {
  entreeId: 0,
  vegetableId: 0,
  sideId: 0,
}

// set transient state based off choice

export const setEntreeId = (choice) => {
  transientState.entreeId = choice
}
export const setVegetableId = (choice) => {
  transientState.vegetableId = choice
}
export const setSideId = (choice) => {
  transientState.sideId = choice
}

// update purchases in api and send listener to document to rerender

export const updatePurchasesData = async () => {
  if (
    transientState.entreeId > 0 &&
    transientState.vegetableId > 0 &&
    transientState.sideId > 0
  ) {
    await fetch("http://localhost:8088/purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transientState),
    })
    setEntreeId(0)
    setSideId(0)
    setVegetableId(0)
  } else {
    window.alert("select options")
  }
}
