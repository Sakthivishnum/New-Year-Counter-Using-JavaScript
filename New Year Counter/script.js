const countdownElement = document.getElementById('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function getNextYear() {
    const currentYear = new Date().getFullYear();
    return currentYear + 1;
}

function updateCountdown() {
    const currentTime = new Date();
    const nextYear = getNextYear();
    const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

    const diff = newYearTime - currentTime;

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours < 10 ? '0' + hours : hours;
    minutesElement.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondsElement.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown immediately
updateCountdown();