// Get the prank scenarios element
const prankScenarios = document.getElementById('prank-scenarios');

// Define an array of prank call scenarios
const prankCallScenarios = [
  'Scenario 1: BY 1',
  'Scenario 2: BY 1',
  'Scenario 3: [Prank Scenario 3]'
];

// Function to create and append prank scenario list items
function createPrankScenarioListItems() {
  prankCallScenarios.forEach(scenario => {
    const listItem = document.createElement('li');
    listItem.textContent = scenario;
    prankScenarios.appendChild(listItem);
  });
}

// Call the function to create and append prank scenario list items
createPrankScenarioListItems();