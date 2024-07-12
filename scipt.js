function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    const digitalClock = document.querySelector('.digital-clock');
    const dateDisplay = document.querySelector('.date-display');

    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) - 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) - 90;
    const secondDegrees = ((seconds / 60) * 360) - 90;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    digitalClock.textContent = now.toLocaleTimeString('en-US', { timeZone });
    dateDisplay.textContent = now.toLocaleDateString('en-US', { timeZone });
}

setInterval(updateClock, 1000);

document.addEventListener('DOMContentLoaded', updateClock);

