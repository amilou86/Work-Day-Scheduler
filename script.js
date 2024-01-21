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

    // Get all save buttons
    var saveBtns = document.querySelectorAll('.saveBtn');

    // Add a click event listener to each save button
    saveBtns.forEach(saveButton => {
        saveButton.addEventListener('click', function () {
            // Get the textarea within the same time-block element
            var descriptionTextarea = this.parentElement.querySelector('.description');

            // Get the user input from the textarea
            var descriptionText = descriptionTextarea.value;

            // Get the ID of the time-block element to use as the key in local storage
            var timeBlockId = this.parentElement.id;

            // Save the input to local storage
            localStorage.setItem(timeBlockId, descriptionText);

            //alert to confirm input has been saved
            alert("Description saved successfully!");
        });
    });



};