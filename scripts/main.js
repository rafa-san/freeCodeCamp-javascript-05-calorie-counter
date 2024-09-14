const calorieCounter = document.getElementById('calorie-counter');
//calorieCounter.style.backgroundColor = "red";
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  //console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}
//console.log(cleanInputString("+-99"));

function isInvalidInput(str) {
  //const regex = /[0-9]+e[0-9]+/i; é possível simplificar isso
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

//console.log(isInvalidInput("1e3")); // [ '1e3', index: 0, input: '1e3', groups: undefined ]
//console.log(isInvalidInput("10")); // null

function addEntry() {
  // targetId = "#" + entryDropdown.value;
  // const targetInputContainer = document.querySelector(targetId + " .input-container");
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />
  `;
}