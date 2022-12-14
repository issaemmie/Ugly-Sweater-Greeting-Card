let sweaterGraphics, sweaterLayer
let showText = true;
let textAlphaShow = 250;
let textAlpha = textAlphaShow;
let textAlphaTarget = textAlphaShow;
let textAlphaSpeed = 0.1;

function setup() {
  createCanvas(500, 700);
  sweaterGraphics = createGraphics(width,height);
  textFont("Source Sans Pro");
  textSize(32);
  flowers.hide();
  flowers2.hide();
  snowflakes.hide();
  snowflakes2.hide();
}

function draw() {
  background(220);
  drawMySweater();
  sweaterLayer = sweaterGraphics.get();
  sweaterLayer.mask(sweaterMask);
  
  // draw the image to the screen
  // tint white means don't change the color of the image
  tint("white");
  image(sweaterLayer,0,0)
  
  // left sleeve
  tint("black");
  image(leftSleeveOutlineMask,0,0);
  tint("rgb(232,232,101)")
  image(leftSleeveMask,0,0);
  
  // chest
  tint("black");
  image(chestOutlineMask,0,0);
  
  // right sleeve
  tint("black");
  image(rightSleeveOutlineMask,0,0);
  tint("rgb(122,155,239)");
  image(rightSleeveMask,0,0);
  
  // trim
  tint("grey")
  image(trimMask,0,0)
  
  drawMyPanel();
}


function drawMySweater() {
  sweaterGraphics.background("rgb(63,33,33)");
  sweaterGraphics.angleMode(DEGREES)
  sweaterGraphics.noStroke();
  sweaterGraphics.fill(0,200,0);
  
  // phil
  sweaterGraphics.image(phil,140, 170);
  
  // still flowers
  sweaterGraphics.push();
  sweaterGraphics.translate(width/2,height/2);
  sweaterGraphics.image(yellowFlower, 0, 0, 50, 50);
  sweaterGraphics.image(purpleFlower, 80, -85, 50, 50);
  sweaterGraphics.image(pinkFlower, -120, -200, 50, 50);
  sweaterGraphics.pop();
  
  // flowing flowers
  flowers.position(400, 180);
  flowers.size(100, 150, 0);
  flowers2.position(400, 330);
  flowers2.size(100, 150, 0);

  // still snowflakes
  sweaterGraphics.push();
  sweaterGraphics.translate(width/2, height/2);
  sweaterGraphics.image(snowflake, -120, -90, 50, 50);
  sweaterGraphics.pop();
  
  // flowing snowflakes
  snowflakes.position(30, 180);
  snowflakes.size(100, 150, 0);
  snowflakes2.position(20, 300);
  snowflakes2.size(100, 150, 0);
}

function preload() {
  // -------------------------
  // DO NOT MODIFY!!!
  let path = "images/";
  sweaterMask = loadImage(path + "sweater.png");
  chestMask = loadImage(path + "chest.png");
  chestOutlineMask = loadImage(path + "chest_outline.png");
  sweaterOutlineMask = loadImage(path + "sweater_outline.png");
  trimMask = loadImage(path + "sweater_trim.png");
  rightSleeveOutlineMask = loadImage(path + "r_sleeve_outline.png");
  rightSleeveMask = loadImage(path + "r_sleeve.png");
  leftSleeveOutlineMask = loadImage(path + "l_sleeve_outline.png");
  leftSleeveMask = loadImage(path + "l_sleeve.png");
  // END OF DR. SPELLS CODE ----------
  
  phil = loadImage(path + "philTrans.png");
  yellowFlower = loadImage(path + "yellowFlower.png");
  purpleFlower = loadImage(path + "purpleFlower.png");
  pinkFlower = loadImage(path + "pinkFlower.png");
  flowers = createImg(path + "flowersFall.gif", "");
  flowers2 = createImg(path + "flowersFall.gif", "");
  snowflakes = createImg(path + "snowflakeFalling.gif", "");
  snowflakes2 = createImg(path + "snowflakeFalling.gif", "");
  snowflake = loadImage(path + "snowflake.png");
}

function drawMyPanel() {
  let myText = "Happy Groundhog Day!"
  textAlpha += (textAlphaTarget - textAlpha) * textAlphaSpeed;
  
  push()
  noStroke()
  fill(40,textAlpha)
  rect(5,5,width-10,height-10, 10, 10)
  fill(255,255,255,textAlpha)
  translate(width/2,height/2)
  text(myText,-150,-60)
  pop()
}

function keyPressed() {
  showText = !showText
  if(showText) {
    textAlphaTarget = textAlphaShow
    flowers.hide();
    flowers2.hide();
    snowflakes.hide();
    snowflakes2.hide();
  } else {
    textAlphaTarget = 0
    flowers.show();
    flowers2.show();
    snowflakes.show();
    snowflakes2.show();
  }
}