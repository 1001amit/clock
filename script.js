let selectedTimeZone = 'America/New_York';

function updateClock() {
    const now = new Date();
    const timeZoneOptions = { timeZone: selectedTimeZone, hour12: false };
    const localeTime = new Date(now.toLocaleString('en-US', timeZoneOptions));

    const hours = localeTime.getHours();
    const minutes = localeTime.getMinutes();
    const seconds = localeTime.getSeconds();

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

setInterval(updateClock, 1000);

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    updateTimeZone();
});
