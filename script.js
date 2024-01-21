window.onload = function () {
    var todayEl = $('#currentDay');
    var containerEl = $('#containerBox');

    var today = dayjs();
    todayEl.text(today.format("[Today is ] D MMM YYYY"));

    // Select all time-block elements
    var timeBlocks = document.querySelectorAll('.time-block');

    // first get current time & date
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    // itirate through each time-block div and get the text content of the div & remove excess whitespace 
    timeBlocks.forEach(timeBlock => {
        var hourDiv = timeBlock.querySelector('.hour');
        var timeText = hourDiv.textContent;
        var time = timeText.trim();

        // determine if each time-block is past, present or future and apply relevant styles form CSS
        if (time === currentHour + ':00') {
            timeBlock.classList.add('present');
        } else if (time < currentHour + ':00') {
            timeBlock.classList.add('past');
        } else {
            timeBlock.classList.add('future');
        }


    });




};