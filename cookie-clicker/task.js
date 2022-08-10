const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
var count = 0;

cookie.onclick = () => {
    count++;
    counter.textContent = `${count}`;
    if (cookie.width <= 200) {
        cookie.width += 20;
        cookie.height += 20;
    } else {
        cookie.width -= 20;
        cookie.height -= 20;
    }
}
