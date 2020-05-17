// console.log('hello world');

// ############################################################################
// ############################ EXERCISE 1&3 ##################################
// ############################################################################

const canvas = document.getElementById('canvas');

//length of 5
const colors = ['#094067', '##fffffe', '#3da9fc', '#90b4ce', '#ef4565'];
const colors2 = ['black', '#ff8906', '#f25f4c', '#e53170','#a7a9be']



function randomInteger(min,max) {
  return Math.floor(Math.random()*(max - min + 1)) + min;
}
//FOR EXERCISE 5, remove the _NONE to get back functionality
function generateArt_T() {

  canvas.style.backgroundColor = `${colors[randomInteger(0,4)]}`;

  //loop 500 times
  for(let i = 0; i < 500;i++) {

    //create a div element
    const element = document.createElement('div');

    //each element must be absolute, so it remains on the canvas
    element.style.position = 'absolute';

    //Random color
    //element.style.backgroundColor = `${colors[randomInteger(0,4)]}`
    //element.style.backgroundColor = `${colors2[randomInteger(0,4)]}`

    //Random gradient
    element.style.background = 
      `linear-gradient(to right,${colors[randomInteger(0,4)]},${colors[randomInteger(0,4)]})`;
    

    //set the element's size and position
    element.style.height = `${randomInteger(50,150)}px`;
    element.style.width = `${randomInteger(50,150)}px`;
    element.style.top = `${randomInteger(1,99)}%`;
    element.style.left = `${randomInteger(1,99)}%`;
    element.style.zIndex = `${randomInteger(1,100)}`;

    //set the element's orientation and shape
    element.style.transform = `rotate(${randomInteger(0,360)}deg)`;
    element.style.opacity = `${randomInteger(80,100)}%`;
    element.style.boxShadow = `0 0 3px 2px rgb(0,0,0,0.2)`;
    element.style.borderRadius = `${randomInteger(1,100)}%`;


    //add div element to the canvas
    canvas.appendChild(element);
    
  }
}

// ############################################################################
// ############################ EXERCISE 2 ####################################
// ############################################################################

const button = document.getElementById('reset-btn');

function cleanUp() {
  canvas.innerHTML = '';
  generateArt();
  document.getElementById("control-container").style.display = 'none';
}

button.addEventListener('click',cleanUp);
// cleanUp();
// document.body.addEventListener('click', cleanUp);


// ############################################################################
// ############################ EXERCISE 4 ####################################
// ############################################################################


function generateArtBySettings() {


  canvas.innerHTML = '';

  let itemWidth = document.getElementById('itemWidth').value;
  let itemHeight = document.getElementById('itemHeight').value;  

  console.log(itemWidth,itemHeight);

  canvas.style.backgroundColor = `${colors[randomInteger(0,4)]}`;

  //loop 500 times
  for(let i = 0; i < 500;i++) {

    //create a div element
    const element = document.createElement('div');

    //each element must be absolute, so it remains on the canvas
    element.style.position = 'absolute';

    //Random color
    //element.style.backgroundColor = `${colors[randomInteger(0,4)]}`
    //element.style.backgroundColor = `${colors2[randomInteger(0,4)]}`

    //Random gradient
    element.style.background = 
      `linear-gradient(to right,${colors[randomInteger(0,4)]},${colors[randomInteger(0,4)]})`;
    

    //set the element's size and position
    element.style.height = `${itemHeight}px`;
    element.style.width = `${itemWidth}px`;
    element.style.top = `${randomInteger(1,99)}%`;
    element.style.left = `${randomInteger(1,99)}%`;
    element.style.zIndex = `${randomInteger(1,100)}`;

    //set the element's orientation and shape
    element.style.transform = `rotate(${randomInteger(0,360)}deg)`;
    element.style.opacity = `${randomInteger(80,100)}%`;
    element.style.boxShadow = `0 0 3px 2px rgb(0,0,0,0.2)`;
    element.style.borderRadius = `${randomInteger(1,100)}%`;

    //add div element to the canvas
    canvas.appendChild(element);


  }
}

document.getElementById('itemWidth').addEventListener('change', generateArtBySettings);
document.getElementById('itemHeight').addEventListener('change', generateArtBySettings);

// ############################################################################
// ############################ EXERCISE 5 ####################################
// ############################################################################

//this will only generate the art as an animation at the begining
//did not code for multi-functionality
function generateArt() {


  canvas.style.backgroundColor = `${colors[randomInteger(0,4)]}`;

  let generateDivs = setInterval(function() {
    //create a div element
    const element = document.createElement('div');

    //each element must be absolute, so it remains on the canvas
    element.style.position = 'absolute';

    //Random color
    //element.style.backgroundColor = `${colors[randomInteger(0,4)]}`
    //element.style.backgroundColor = `${colors2[randomInteger(0,4)]}`

    //Random gradient
    element.style.background = 
      `linear-gradient(to right,${colors[randomInteger(0,4)]},${colors[randomInteger(0,4)]})`;
    

    //set the element's size and position
    element.style.height = `${randomInteger(50,150)}px`;
    element.style.width = `${randomInteger(50,150)}px`;
    element.style.top = `${randomInteger(1,99)}%`;
    element.style.left = `${randomInteger(1,99)}%`;
    element.style.zIndex = `${randomInteger(1,100)}`;

    //set the element's orientation and shape
    element.style.transform = `rotate(${randomInteger(0,360)}deg)`;
    element.style.opacity = `${randomInteger(80,100)}%`;
    element.style.boxShadow = `0 0 3px 2px rgb(0,0,0,0.2)`;
    element.style.borderRadius = `${randomInteger(1,100)}%`;
  //add div element to the canvas
  canvas.appendChild(element);

  let allDivs = document.querySelectorAll("#canvas > div");
  // console.log(allDivs.length);

  if(allDivs.length == 500) {
    document.getElementById("control-container").style.display = 'flex';
    clearInterval(generateDivs);
  }


  }, 1)


  
}