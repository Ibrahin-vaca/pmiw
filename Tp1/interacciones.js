function keyPressed() {
  if (key === ' ') {
    coloresRandom(); 
  }
  
  if (key === 'r') { 
    reiniciarVariables(); 
  }
}

function coloresRandom() {
  frameRate(random(10, 15)); 
  colores = color(random(255), random(255), random(255)); 
}

function reiniciarVariables() {
  colores = color(255); 
}
