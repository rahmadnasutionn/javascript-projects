const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const giveAway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022, 7, 17, 10, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
giveAway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}: ${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneday = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinutes = 60 * 1000;
    let days = t / oneday;
    days = Math.floor(days);
    let hours = Math.floor((t % oneday) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinutes);
    let seconds = Math.floor((t % oneMinutes) / 1000);
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0s${item}`);
        }
        return item;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });
}
let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();