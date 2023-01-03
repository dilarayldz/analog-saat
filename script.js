const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelectorAll(".hours");

function tiktak() {

    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hours = new Date().getHours();

    sec.style.transform = 'rotate(${180 + (second * 6)}deg)'
    min.style.transform = 'rotate(${180 + (minute * 6)}deg)'
    hours.style.transform = 'rotate(${180 + (hour * 30)}deg)'
}

setInterval(tiktak, 1000);