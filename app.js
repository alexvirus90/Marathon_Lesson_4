const board = document.querySelector('#board')
const colors = [
  '#607BFF',
  '#FF6DF2',
  '#FFDEAA',
  '#B9FFAF',
  '#A5F4FF',
  '#FF5664',
  '#CF23FF',
  '#FFEE3D',
]
const SQUARES_NUMBER = 1200

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const { target } = event
  const color = getRandomColor()

  target.style.backgroundColor = color
  target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const { target } = event

  target.style.backgroundColor = '#1d1d1d'
  target.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
