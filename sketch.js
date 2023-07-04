let cor;
let squareX; 
let squareY; 

function setup() {
  createCanvas(650, 500); //width x height
  background( "rgb(212,212,212)");
  cor = color(random(0, 100), random (0,150),random(0,100), random (0, 200));
  squareX = [0, 0];
  squareY = [random(height), random(height)];
}

  function draw() {
    
    stroke ("black");
    fill (cor);
    
    //console.log(squareX.length);
    for(let contador in squareX) {
      //console.log(contador);
      square (squareX[contador], squareY[contador], 10);
      squareX[contador] += 10;
      squareY[contador] += random (-15, 15);
      
      if (squareX[contador] >= width) {
        squareX[contador] = 0;
        squareY[contador] = random(height);
      }
    
    }
    
    if (mouseIsPressed) {
      cor = color(random(0, 225), random (10,200),random(0, 250), random (0,300));
    }
  
}