let selectedTimeZone = 'America/New_York'; // Default time zone

function updateClock() {
    const now = new Date();
    const timeZoneOptions = { timeZone: selectedTimeZone, hour12: true };
    const hours = new Date(now.toLocaleString('en-US', timeZoneOptions)).getHours();
    const minutes = new Date(now.toLocaleString('en-US', timeZoneOptions)).getMinutes();
    const seconds = new Date(now.toLocaleString('en-US', timeZoneOptions)).getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30);
    const minuteDegrees = (minutes / 60) * 360 + ((seconds / 60) * 6);
    const secondDegrees = (seconds / 60) * 360;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
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

