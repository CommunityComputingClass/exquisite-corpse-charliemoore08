<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minimal Interactive Website</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #0a0a0a;
      color: #ffffff;
      font-family: 'Arial', sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
    }

    canvas {
      display: block;
    }

    .content {
      text-align: center;
      z-index: 2;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      pointer-events: none;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      pointer-events: none;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 20px;
      line-height: 1.6;
      pointer-events: none;
    }

    a {
      color: #00ffcc;
      text-decoration: none;
      font-size: 1.2rem;
      transition: color 0.3s;
      pointer-events: auto;
    }

    a:hover {
      color: #ff0099;
    }
  </style>
</head>
<body>
  <div class="content">
    <h1>Welcome to Minimalism</h1>
    <p>This interactive canvas is created with p5.js. Enjoy the visuals below!</p>
    <p><a href="https://worstcase.online" target="_blank">Visit Original Website</a></p>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js"></script>
  <script>
    let circles = [];

    function setup() {
      // Create a full-screen canvas
      createCanvas(windowWidth, windowHeight);
      noStroke();

      // Generate random circles
      for (let i = 0; i < 100; i++) {
        circles.push({
          x: random(width),
          y: random(height),
          radius: random(10, 50),
          xSpeed: random(-2, 2),
          ySpeed: random(-2, 2),
          color: color(random(100, 255), random(100, 255), random(100, 255), 150)
        });
      }
    }

    function draw() {
      background(10, 10, 10, 25);

      // Draw and animate circles
      for (let circle of circles) {
        fill(circle.color);
        ellipse(circle.x, circle.y, circle.radius);

        // Move the circles
        circle.x += circle.xSpeed;
        circle.y += circle.ySpeed;

        // Bounce the circles off the edges
        if (circle.x < 0 || circle.x > width) circle.xSpeed *= -1;
        if (circle.y < 0 || circle.y > height) circle.ySpeed *= -1;
      }
    }

    function windowResized() {
      // Resize canvas when window size changes
      resizeCanvas(windowWidth, windowHeight);
    }
  </script>
</body>
</html>
