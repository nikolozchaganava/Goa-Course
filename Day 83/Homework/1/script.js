document.getElementById('age-form').addEventListener('submit', function(event) {
    calculateAndDisplayAge(event);
  });
  
  function calculateAndDisplayAge(event) {
    event.preventDefault();
  
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    if (isValidDate(day, month, year) === false) {
      alert('Please enter a valid date.');
      return;
    }
  
    const age = calculateAge(day, month, year);
    document.getElementById('result-years').textContent = `${age.years}`;
    document.getElementById('result-months').textContent = `${age.months}`;
    document.getElementById('result-days').textContent = `${age.days}`;
  }
  
  function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    const isValid = date && date.getDate() === day && (date.getMonth() + 1) === month && date.getFullYear() === year;
    return Boolean(isValid);
  }
  
  function calculateAge(day, month, year) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    return { years, months, days };
  }
  