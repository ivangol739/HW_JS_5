const holes = document.querySelectorAll('.hole')
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')


for (i=1; i <= holes.length; i++) {
    let hole = document.getElementById(`hole${i}`)
    hole.addEventListener('click', () => {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
            if (Number(dead.textContent) === 10) {
                alert('Победа')
                location.reload()
            }
        } else {
            lost.textContent = Number(lost.textContent) + 1;
            if (Number(lost.textContent) === 10) {
                alert('Поражение')
                location.reload()
            }
        }
    })
}