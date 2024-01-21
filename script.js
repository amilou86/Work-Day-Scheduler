window.onload = function () {
    var todayEl = $('#currentDay');
    var containerEl = $('#containerBox');

    var today = dayjs();
    todayEl.text(today.format("[Today is ] D MMM YYYY"));

containerEl
    
};