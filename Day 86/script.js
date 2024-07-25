var data = {
    daily: [
      { title: "Work", current: "5hrs", previous: "Last Day - 7hrs" },
      { title: "Play", current: "1hr", previous: "Last Day - 2hrs" },
      { title: "Study", current: "0hrs", previous: "Last Day - 1hr" },
      { title: "Exercise", current: "1hr", previous: "Last Day - 1hr" },
      { title: "Social", current: "1hr", previous: "Last Day - 3hrs" },
      { title: "Self Care", current: "0hrs", previous: "Last Day - 1hr" }
    ],
    weekly: [
      { title: "Work", current: "32hrs", previous: "Last Week - 36hrs" },
      { title: "Play", current: "10hrs", previous: "Last Week - 8hrs" },
      { title: "Study", current: "4hrs", previous: "Last Week - 7hrs" },
      { title: "Exercise", current: "4hrs", previous: "Last Week - 5hrs" },
      { title: "Social", current: "5hrs", previous: "Last Week - 10hrs" },
      { title: "Self Care", current: "2hrs", previous: "Last Week - 2hrs" }
    ],
    monthly: [
      { title: "Work", current: "103hrs", previous: "Last Month - 128hrs" },
      { title: "Play", current: "23hrs", previous: "Last Month - 29hrs" },
      { title: "Study", current: "13hrs", previous: "Last Month - 19hrs" },
      { title: "Exercise", current: "11hrs", previous: "Last Month - 18hrs" },
      { title: "Social", current: "21hrs", previous: "Last Month - 23hrs" },
      { title: "Self Care", current: "7hrs", previous: "Last Month - 11hrs" }
    ]
  };
  
  function updateDashboard(timeframe) {
    var cards = document.querySelectorAll('.card');
    var timeframeData = data[timeframe];
  
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var currentTitle = card.querySelector('h2').innerText;
      for (var j = 0; j < timeframeData.length; j++) {
        if (timeframeData[j].title === currentTitle) {
          card.querySelector('.current').innerText = timeframeData[j].current;
          card.querySelector('.previous').innerText = timeframeData[j].previous;
        }
      }
    }
  }
  
  var buttons = document.querySelectorAll('.timeframe-buttons button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('active');
      }
      this.classList.add('active');
      updateDashboard(this.id);
    });
  }
  
  // Initialize the dashboard with weekly data
  updateDashboard('weekly');
  