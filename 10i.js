let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
  function displayCalculation() {
    document.querySelector('.result').innerHTML =
      calculation;
  };
  function updateCalculation (value) {
    if (document.querySelector('.result').innerHTML === "Cleared!") {
      calculation = '';
    };
    if (typeof value === 'number' || ['+','-','*','/'].includes(value)) {
      calculation = calculation + String(value);
      displayCalculation();
    } else if (value === '=') {
      calculation = eval(calculation);
      displayCalculation();
    }
    localStorage.setItem('calculation', JSON.stringify(calculation))
  }