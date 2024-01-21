window.onload = function () {
    // Display current date
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

        // get saved description from local storage based on timeBlock ID
        var timeBlockId = timeBlock.id;
        var savedDescription = localStorage.getItem(timeBlockId);

        // If saved description exists, pre-populate the textarea
        if (savedDescription) {
            timeBlock.querySelector('.description').value = savedDescription;
        }
    });

    // Get all save buttons
    var saveBtns = document.querySelectorAll('.saveBtn');
    // add eventlisteners to save buttons
    saveBtns.forEach(saveButton => {
        saveButton.addEventListener('click', function () {
            // Get textarea element 
            var descriptionTextarea = this.parentElement.querySelector('.description');
            // get user input text
            var descriptionText = descriptionTextarea.value;

            // Get timeBlock ID as key for local storage
            var timeBlockId = this.parentElement.id;

            // Save user input to local storage with the timeBlock ID as key
            localStorage.setItem(timeBlockId, descriptionText);

            // alert to confirm saved
            alert("Description saved successfully!");
        });
    });
};