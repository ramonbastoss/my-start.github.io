const superDiv = document.querySelector('.contain-all-mains')

const addButton = document.querySelector('#creator')
addButton.addEventListener('click', () => {
    const newContainer = document.createElement('div')
    newContainer.classList.add('main')
    newContainer.innerHTML = '<div class="div-header"></div><div class="time-container"><h1 class="time"> <span class="hours">00</span> : <span class="minutes">00</span> : <span class="seconds">00</span></h1></div><button class="start-button">start</button>'
    superDiv.appendChild(newContainer)

    let allContainers = [...document.querySelectorAll('.main')]
    for (let ct of allContainers) {
        let new_element = ct.cloneNode(true);
        ct.parentNode.replaceChild(new_element, ct);
    }
    allContainers = [...document.querySelectorAll('.main')]
    for (let container of allContainers) {
        let interOfThis = 0
        container.addEventListener('click', function activate() {
            const start = container.querySelector('.start-button')
            const hours = container.querySelector('.hours')
            const minutes = container.querySelector('.minutes')
            const seconds = container.querySelector('.seconds')
            start.classList.toggle('turned-on')
            console.log(start)
            if (start.classList.contains('turned-on')) {

                inter = setInterval(function () {

                    let sValue = +seconds.textContent
                    sValue += 1
                    seconds.textContent = sValue > 9 ? sValue : '0' + sValue
                    if (seconds.textContent >= 60) {
                        seconds.textContent = '00'
                        minutes.textContent = +minutes.textContent + 1
                        if (minutes.textContent < 10) { minutes.textContent = '0' + minutes.textContent }

                    }
                    if (minutes.textContent >= 60) {
                        minutes.textContent = 0
                        if (minutes.textContent < 10) { minutes.textContent = '0' + minutes.textContent }
                        hours.textContent = +hours.textContent + 1
                        if (hours.textContent < 10) { hours.textContent = '0' + hours.textContent }
                    }

                }, 10);
                interOfThis = inter
            }
            else { console.log(interOfThis), clearInterval(interOfThis) }
            start.textContent = start.classList.contains('turned-on') ? 'pause' : 'start';
            start.classList.toggle('not-paused')
        })
    }
})

