//to store board inputs and its position
const selctedValues = [];
const selectedGrid = [];

//to set initial value
function setValue(max, min) {
  let temp = Math.floor((Math.random() * (10 - 1) + 1));
  let tempGrid = Math.floor((Math.random() * (max - min) + min));
  let tempDiv = document.querySelector("#grid" + tempGrid);

  //check whether the value is already present or not
  while (selctedValues.includes(temp)) {
    temp = Math.floor((Math.random() * (10 - 1) + 1));
  }
  tempDiv.innerHTML = temp;

  //store the values to the array
  selctedValues.push(temp);
  selectedGrid.push(tempGrid);
  console.log(selctedValues);
  console.log(selectedGrid);
}
//to select 2 random grids 
setValue(5, 1);
setValue(10, 5);
