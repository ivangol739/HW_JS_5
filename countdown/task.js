const time = document.getElementById('timer')

const t = setInterval(() => {
    time.textContent = Number(time.textContent) - 1;
    if (time.textContent <= 0) {
        alert('Вы победили')
        clearInterval(t)
    }
}, 1000);