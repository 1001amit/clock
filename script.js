let selectedTimeZone = 'America/New_York';
let isNightMode = false;

function updateClock() {
    const now = new Date();
    const timeZoneOptions = { timeZone: selectedTimeZone, hour12: false };
    const localeTime = new Date(now.toLocaleString('en-US', timeZoneOptions));

    document.querySelector('.digital-clock').textContent = localeTime.toLocaleTimeString('en-US', timeZoneOptions);
    document.querySelector('.date-display').textContent = localeTime.toDateString();
}

function updateTimeZone() {
    const timeZoneSelector = document.getElementById('time-zone');
    timeZoneSelector.addEventListener('change', (event) => {
        selectedTimeZone = event.target.value;
        updateClock();
    });
}

function toggleMode() {
    const body = document.body;
    const button = document.getElementById('toggle-mode');
    isNightMode = !isNightMode;

    if (isNightMode) {
        body.classList.add('night-mode');
        button.textContent = 'Switch to Day Mode';
    } else {
        body.classList.remove('night-mode');
        button.textContent = 'Switch to Night Mode';
    }
}

document.getElementById('toggle-mode').addEventListener('click', toggleMode);

setInterval(updateClock, 1000);

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    updateTimeZone();
});
