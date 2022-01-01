const canvasSketch = require("canvas-sketch");
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [1080, 1080],
};

/* const degToRad = (degress)=>{
  return degress / 180 * Math.PI
}

const randomRange = (min, max)=>{
  return Math.random() * (min , max ) + min
} */

const sketch = () => {
 return({context, width, height})=>{
   context.fillStyle='orange';
   context.fillRect(0, 0, width, height);
   

   const cx = width * 0.5;
   const cy = height * 0.5;
   const w = width * 0.01;
   const h = width * 0.15;
   //const num = Math.random() * 24
   const num = 24;
   const radius = width * .3;
  
  for (let i = 0; i < num; i++) {
    const slice = math.degToRad(360 / num);
    const angle = slice * i;

    x = cx + radius * Math.sin(angle)
    y = cy + radius * Math.cos(angle)
    //para que no cambie el origen de otros elementos
    context.save();
    context.fillStyle = "black";
    context.translate(x, y);

    //context.rotate(.2);
    //para convertir de radianes a grados
    context.rotate(- angle);
    context.scale(random.range(1, 2), random.range(2, .5));
    

    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h);
    context.fill();
    context.restore();
    //TODO: save y restore para manejar el codigo por bloques

    context.save();
    context.fillStyle = "white";
    context.translate(cx, cy);
    context.rotate(- angle);
    context.lineWidth = random.range(5, 20);
    
    context.beginPath()
    context.arc(0,0,radius * random.range(.7, 1.3), slice * random.range(1,-2), random.range(.7, 5))
    context.fill()
    
    context.stroke()

    
    
    context.restore();

  }


   

   /* context.translate(100, 400);
   context.beginPath();
   context.arc(0, 0, 50, 0, Math.PI * 2)
   context.fill() */
   

   
   
 }
};

canvasSketch(sketch, settings);
