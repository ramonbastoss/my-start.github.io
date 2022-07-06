// this is a game based on "Genius" a color memorizing game.

function makeItGlow(element, delay, duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            element.classList.add('active')

        }, delay);
        setTimeout(() => {
            element.classList.remove('active')
            resolve()
        }, delay + duration);
    })
}
// this is a function used to make an element glow

function restartGame(allColors, func) {
    allColors.forEach((box) => {
        box.removeEventListener('click', func)
        // boxClone = box.cloneNode(true);
        // box.parentNode.replaceChild(boxClone, box)
    })

    boxesPressed = []
    sequence = []
}
// used when player miss.

const startButton = document.querySelector('.start')

const header = document.querySelector('h1')
const roundCounter = document.querySelector('h2')
const signal = document.querySelector('h3')

const allColors = [...document.querySelectorAll('.box')];
let [green, yellow, red, blue] = [...allColors]


const randInt = (min, max) => Math.floor(Math.random() * (max + 1)) + min

startButton.addEventListener('click', () => {
    const allColors = [...document.querySelectorAll('.box')];
    // this is only necessary due to restartGame().

    let sequence = []
    let boxesPressed = []

    console.log('clicked')
    header.textContent = 'Memoryze the sequence!'
    header.style = `color: black`
    startButton.hidden = true

    const runIt = async (array) => {
        for (let i = 0; i < array.length; i++) {
            await makeItGlow(array[i], 500, 600)
        }
    }
    // this function will iterate through the sequence and make each one of them glow.

    async function addOneAndRun() {
        let index = randInt(0, 3)
        sequence.push(allColors[index])
        roundCounter.textContent = `round ${sequence.length}`

        signal.textContent = 'wait!'
        signal.classList.remove('go')
        signal.classList.add('wait')
        // this changes the signal and style it

        await runIt(sequence)

        signal.classList.remove('wait')
        signal.textContent = 'go!'
        signal.classList.add('go')
        // this changes the signal and style it

        // console.log('thats the right guess', sequence)
        makeEachBoxClickable()
    }
    addOneAndRun()

    function makeEachBoxClickable() {
        console.log('runned')
        const makeIt = (e) => {
            console.log('target: ', e.target)
            makeItGlow(e.target, 0, 110).then(() => {

                boxesPressed.push(e.target)
                console.log(boxesPressed)
                console.log(sequence)

                if (boxesPressed[boxesPressed.length - 1] !== sequence[boxesPressed.length - 1]) {
                    header.textContent = 'You Lose!'
                    header.style.color = 'red'
                    startButton.hidden = false
                    startButton.textContent = 'restart'
                    restartGame(allColors, makeIt)
                    console.log('inside if')
                }
                else if (boxesPressed.length === sequence.length) {
                    boxesPressed = []
                    allColors.forEach((color) => {
                        color.removeEventListener('click', makeIt)
                        console.log('this box', color, 'losed event listener')
                    })
                    addOneAndRun()
                }
            })
        }
        allColors.forEach((box) => {
            box.addEventListener('click', makeIt)
            // end of box click event 
        })
    }


})

/*
 startgame()

 add one()
 run sequence()
 add listeners(
    remove listeners() when: playerGuess == sequence
    or
    restartGame() when player guessed wrong
)
*/

// problems: i can't just remove a single listener of a box because i can't declare the function makeIt()
// outside the forEach({})

// update: i discovered how to declare the function outside the forEach. and i also discovered wich was
// the problem of declare it inside the forEach()

// problem2: if i choose to clear all the listeners in the box this is also a bad idea because then
// all the boxes become "different"


