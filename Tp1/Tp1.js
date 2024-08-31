let imagen;
let colores;

function preload() {
  imagen = loadImage('F_1.jpg'); 
}

function setup() {
  createCanvas(800, 400);
  colores = color(255); 
  noLoop(); 
}

function draw() {
  background(0);
  
  print(mouseX + "/" + mouseY);
  
  dibujarGrilla(); 
  image(imagen, 0, 0, 400, 400); 
}

function esPar(numero) {
  return (numero % 2 === 0);
}

function dibujarCuadrados(a, b) {
  if (esPar(a + b)) {
    for (let i = 0; i < 50; i += 1) {
      let borde = i * 255 / 50;
      stroke(255 - borde + red(colores), 255 - borde + green(colores), 255 - borde + blue(colores));
      line(400 + i + a, 0 + b, 400 + i + a, 30 + b);
    }
  } else {
    for (let i = 0; i < 50; i += 1) {
      let borde = i * 255 / 50;
      stroke(borde + red(colores), borde + green(colores), borde + blue(colores));
      line(400 + i + a, 0 + b, 400 + i + a, 30 + b);
    }
  }
}

function dibujarGrilla() {
  for (let a = 0; a < width; a += 50) {
    for (let b = 0; b < height; b += 25) {
      dibujarCuadrados(a, b);
    }
  }
}
