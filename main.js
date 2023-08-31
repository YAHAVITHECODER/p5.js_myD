function preload()
{
    
}

function setup()
{
  canvas = createCanvas(640, 480);
  canvas.position(300, 300);
  

    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
  

    rect(40, 120, 120, 40);
    // An ellipse
    ellipse(240, 240, 80, 80);

    triangle(300, 100, 320, 100, 310, 80);
  
    translate(580, 200);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/5);
    }
  }



function draw()
{
    circle(140, 140, 70);

    fill('red');     
}

function draw()
{

}

function take_snapshot()
{
    save('for gazal_bafana my teacher.png')
}
