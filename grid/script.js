const size = +prompt('chose a grid size, recommended: 3')
const container = document.querySelector('.grid')
for (i = 1; i <= size ** 2; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    container.appendChild(box)
}

if (size <= 4) {
    container.style.cssText = `display: grid;
    grid-template-rows: repeat(${size}, minmax(100px, auto));
    grid-template-columns: repeat(${size}, 100px);
    gap: 10px;`
} else {
    const variableSize = (100/size)*4
    container.style.cssText = `display: grid;
    grid-template-rows: repeat(${size}, minmax(${variableSize}px, auto));
    grid-template-columns: repeat(${size}, ${variableSize}px);
    gap: 10px;`
}

const firstMarked = document.querySelector(`.box:nth-of-type(${size})`)
firstMarked.classList.add('marked')


window.addEventListener('keydown', (e) => {
    const cyan = document.querySelector('.marked')
    // Left
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
        const leftBrother = cyan.previousElementSibling
        if (leftBrother !== null) {
            cyan.classList.remove('marked')
            leftBrother.classList.add('marked')
        }
    }
    // Right
    if (e.code === 'KeyD' || e.code === 'ArrowRight') {
        const rightBrother = cyan.nextElementSibling
        if (rightBrother !== null) {
            cyan.classList.remove('marked')
            rightBrother.classList.add('marked')
        }
    }
    // Down
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
        let downBrother = cyan
        for (i = 1; i <= size; i++) {
            downBrother = downBrother.nextElementSibling
        }

        if (downBrother !== null) {
            cyan.classList.remove('marked')
            downBrother.classList.add('marked')
        }
    }
    // Up
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
        let upBrother = cyan
        for (i = 1; i <= size; i++) {
            upBrother = upBrother.previousElementSibling
        }

        if (upBrother !== null) {
            cyan.classList.remove('marked')
            upBrother.classList.add('marked')
        }
    }
})
