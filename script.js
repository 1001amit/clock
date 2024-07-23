let selectedTimeZone = 'America/New_York';
let isNightMode = false;
let alarmTime = null;
let alarmTimeout = null;

function updateClocks() {
    const now = new Date();
    const clocks = document.querySelectorAll('.clock');

    clocks.forEach(clock => {
        const timeZone = clock.getAttribute('data-timezone');
        const timeZoneOptions = { timeZone: timeZone, hour12: false };
        const localeTime = new Date(now.toLocaleString('en-US', timeZoneOptions));

        clock.querySelector('.digital-clock').textContent = localeTime.toLocaleTimeString('en-US', timeZoneOptions);
        clock.querySelector('.date-display').textContent = localeTime.toDateString();

        if (alarmTime && localeTime.getHours() === alarmTime.hours && localeTime.getMinutes() === alarmTime.minutes) {
            document.getElementById('alarm-message').textContent = 'Alarm ringing!';
            document.getElementById('alarm-sound').play();
            alarmTimeout = setTimeout(() => {
                document.getElementById('alarm-message').textContent = '';
                document.getElementById('alarm-sound').pause();
                document.getElementById('alarm-sound').currentTime = 0;
            }, 60000);  // Alarm message stays for 1 minute
            alarmTime = null;
        }
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

function setAlarm() {
    const alarmInput = document.getElementById('alarm-time').value;
    if (alarmInput) {
        const [hours, minutes] = alarmInput.split(':').map(Number);
        alarmTime = { hours, minutes };
        document.getElementById('alarm-message').textContent = `Alarm set for ${hours}:${minutes}`;
    }
}

document.getElementById('toggle-mode').addEventListener('click', toggleMode);
document.getElementById('set-alarm').addEventListener('click', setAlarm);

setInterval(updateClocks, 1000);

document.addEventListener('DOMContentLoaded', () => {
    updateClocks();
});

