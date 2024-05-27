a = 0
b = 0
x = 120
y = 50
x2 = 200
y2 = 50
score = 0
xcoords = [40, 80, 120, 160, 200, 240, 280, 320, 360]
hearts = 5
speed = 1

function preload() {
  space = loadImage("Space Background.jpeg")
}

function setup() {
  createCanvas(400, 400)
  image(space, 0, 0, 400, 400)
}

function ship(a, b) {
  fill(255, 0, 255)
  rect(140 + a, 180 + b, 120, 15)
  rect(170 + a, 210 + b, 60, 15)
  fill(0, 255, 0)
  ellipse(200 + a, 200 + b, 40, 100)
}

function draw() {
  ship(a, b)
  fill(255)
  ellipse(x, y, 25, 25)
  ellipse(x2, y2, 25, 25)
  textSize(20)
  text("Score:", 290, 350)
  text(score, 350, 350)
  fill(255, 0, 0)
  text(hearts, 350, 300)
  text("Hearts:", 280, 300)
  y += speed
  y2 += speed
  if (y > 425) {
    y = 50
    x = random(xcoords)
    hearts -= 1
    image(space, 0, 0, 400, 400)
  }
  if (y2 > 425) {
    y2 = 50
    x2 = random(xcoords)
    hearts -= 1
    image(space, 0, 0, 400, 400)
  }
  if (score >= 5) {
    speed = 1.5
  }
  if (score >= 10) {
    speed = 2
  }
  if (score >= 15) {
    speed = 2.5
  } 
  if (score >= 20) {
    speed = 3
  }
  if (score >= 25) {
    speed = 3.5
  }
  if (hearts <= 0) {
    background(0)
    textSize(50)
    fill(255)
    text("Game Over:", 40, 200)
    text(score, 320, 200)
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    if (a > -160) {
      a -= 40
      image(space, 0, 0, 400, 400)
    }
  }
  if (keyCode == RIGHT_ARROW) {
    if (a < 160) {
      a += 40
      image(space, 0, 0, 400, 400)
    }
  }
  if (keyCode == UP_ARROW) {
    if (b > -160) {
      b -= 40
      image(space, 0, 0, 400, 400)
    }
  }
  if (keyCode == DOWN_ARROW) {
    if (b < 160) {
      b += 40
      image(space, 0, 0, 400, 400)
    }
  }
  if (keyCode == 32) {
    image(space, 0, 0, 400, 400)
    fill(255, 0, 0)
    rect(a + 190, b, 20, 200)
    if (a + 200 == x) {
      if (b + 200 > y) {
        if (b < y) { 
          score += 1
          x = random(xcoords)
          y = 50
        }
      }
    }
    if (a + 200 == x2) {
      if (b + 200 > y2) {
        if (b < y2) {
          score += 1
          x2 = random(xcoords)
          y2 = 50
        }
      }
    }
  }
}
