// console.log('hello world');

// ############################################################################
// ############################ EXERCISE 1 ####################################
// ############################################################################

const canvas = document.getElementById('canvas');

//length of 5
const colors = ['#094067', '##fffffe', '#3da9fc', '#90b4ce', '#ef4565'];
const colors2 = ['black', '#ff8906', '#f25f4c', '#e53170','#a7a9be']



function randomInteger(min,max) {
  return Math.floor(Math.random()*(max - min + 1)) + min;
}

function generateArt() {
  //loop 500 times
  for(let i = 0; i < 500;i++) {

    //create a div element
    const element = document.createElement('div');

    //assign a random color from the selection
    element.style.position = 'absolute';
    element.style.backgroundColor = `${colors[randomInteger(0,4)]}`
    //element.style.backgroundColor = `${colors2[randomInteger(0,4)]}`

    element.style.height = `${randomInteger(10,150)}px`;
    element.style.width = `${randomInteger(10,150)}px`;
    element.style.top = `${randomInteger(1,99)}%`;
    element.style.left = `${randomInteger(1,99)}%`;
    element.style.zIndex = `${randomInteger(1,100)}`;
    element.style.transform = `rotate(${randomInteger(0,360)}deg)`;

    


    canvas.appendChild(element);

    //assign a color hue to each element
    
  }
}

// ############################################################################
// ############################ EXERCISE 2 ####################################
// ############################################################################

const button = document.getElementById('reset-btn');

function cleanUp() {
  canvas.innerHTML = '';
  generateArt();
}

button.addEventListener('click',cleanUp);
// document.body.addEventListener('click', cleanUp);