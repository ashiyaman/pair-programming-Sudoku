const container1Div = document.querySelector("#container1");
const container2Div = document.querySelector("#container2");

window.onload = () => {
    // count of div elements to add
    const count = 9;
    for (let x = 0; x < count; x++) {
      //create new div element
      const newDiv = createGridElement(x, "container1");
      // append the new div to container
      container1Div.appendChild(newDiv);
    }
  };

  function createGridElement(index, containerId) {
    // assign class & style to div
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid", "grid" + index);
    newDiv.style.cssText = "width:33.33%;height:33.33%;";
    return newDiv;
  }