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

function inputValidate(event){
  if (event.key === "Enter"){
    event.preventDefault();
    if (selctedValues.includes(parseInt(event.target.value))){
      alert("The entered value is already in the grid. Please select a different value")
    }
    else{
      selctedValues.push(parseInt(event.target.value))
    }
  }
}

function sudokuValidate(){
  if (selctedValues.length==9){
    alert("You have solved the puzzle!");
    location.reload();
  } else {
    alert("The puzzle is not solved yet! Please complete it before submitting");
  }
}
