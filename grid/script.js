const size = +prompt('chose a grid size, recommended: 3')
const container = document.querySelector('.grid')
for (i = 1; i <= size ** 2; i++) {
    const box = document.createElement('dir')
    box.classList.add('box')
    container.appendChild(box)
}

const allBoxes = document.querySelectorAll('.box')
container.style.cssText = `display: grid;
grid-template-rows: repeat(${size}, minmax(100px, auto));
grid-template-columns: repeat(${size}, 100px);
gap: 10px;`

const firstMarked = document.querySelector(`.box:nth-of-type(${size})`)
firstMarked.classList.add('marked')


window.addEventListener('keydown', (e) => {
    // Left
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
        const cyan = document.querySelector('.marked')
        const leftBrother = cyan.previousElementSibling
        if (leftBrother !== null) {
            console.log(leftBrother)
            cyan.classList.remove('marked')
            leftBrother.classList.add('marked')
        }
    }
    // Right
    if (e.code === 'KeyD' || e.code === 'ArrowRight') {
        const cyan = document.querySelector('.marked')
        const rightBrother = cyan.nextElementSibling
        if (rightBrother !== null) {
            console.log(rightBrother)
            cyan.classList.remove('marked')
            rightBrother.classList.add('marked')
        }
    }
    // Down
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
        const cyan = document.querySelector('.marked')
        let downBrother = cyan
        for (i = 1; i <= size; i++) {
            downBrother = downBrother.nextElementSibling
        }

        if (downBrother !== null) {
            console.log(downBrother)
            cyan.classList.remove('marked')
            downBrother.classList.add('marked')
        }
    }
    // Up
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
        const cyan = document.querySelector('.marked')
        let upBrother = cyan
        for (i = 1; i <= size; i++) {
            upBrother = upBrother.previousElementSibling
        }

        if (upBrother !== null) {
            console.log(upBrother)
            cyan.classList.remove('marked')
            upBrother.classList.add('marked')
        }
    }
})
