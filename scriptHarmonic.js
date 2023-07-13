var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var amplitude = 50;
var width = c.width;
var height = c.height / 2;
var step = 1;
var frequency = 2;
var plus = 0;
var speed = 1;
var animationID;
function draw()
{
  ctx.beginPath();
  ctx.moveTo(0, height);
  var c = width / Math.PI / (frequency * 2);
  for (var i = 0; i < width; i += step)
  {
    var x = amplitude * Math.sin(i / c - plus);
    ctx.lineTo(i, height + x);
  }
  ctx.strokeStyle = '#0096FF';
  ctx.stroke();
}
function drawAnimation()
{
  animationID = requestAnimationFrame(drawAnimation);
  ctx.beginPath();
  ctx.moveTo(0, height);
  var c = width / Math.PI / (frequency * 2);
  for (var i = 0; i < width; i += step)
  {
    var x = amplitude * Math.sin(i / c - plus * speed);
    ctx.lineTo(i, height + x);
    ctx.clearRect(0,0,width,height * 2);
  }
  ctx.strokeStyle = '#0096FF';
  ctx.stroke();
  plus+=0.1 * frequency;
}
drawAnimation();
endAnimation();
function startAnimation()
{
  animationID = requestAnimationFrame(drawAnimation);
  document.getElementById('start-button').disabled = true;
}
function endAnimation()
{
  cancelAnimationFrame(animationID);
  document.getElementById('start-button').disabled = false;
}
function resetAnimation()
{
  cancelAnimationFrame(animationID);
  document.getElementById('start-button').disabled = false;
  plus = 0;
  ctx.clearRect(0,0,width,height * 2);
  draw();
}
var selectedRadioAmplitude;
function radioChangeAmplitude(el)
{
  selectedRadioAmplitude = el.value;
  if(selectedRadioAmplitude == 'yes')
  {
    drawAmplitude();
  }
  else if(selectedRadioAmplitude == 'no')
  {
    cbottom.clearRect(0,0,canvasb.width,canvasb.height);
    drawGraph();
    if(document.getElementById("radio-three").checked)
    {
      drawEquilibrium();
    }
  }
}
var selectedRadioEquilibrium;
function radioChangeEquilibrium(el)
{
  selectedRadioEquilibrium = el.value;
  if(selectedRadioEquilibrium == 'yes')
  {
    drawEquilibrium();
  }
  else if(selectedRadioEquilibrium == 'no')
  {
    cbottom.clearRect(0,0,canvasb.width,canvasb.height);
    drawGraph();
    if(document.getElementById("radio-one").checked)
    {
      drawAmplitude();
    }
  }
}
var selectedRadioSpeed;
function radioChangeSpeed(el)
{
  selectedRadioSpeed = el.value;
  if(selectedRadioSpeed == 'slow')
  {
    speed = 0.5;
  }
  else if(selectedRadioSpeed == 'fast')
  {
    speed = 2;
  }
  else if(selectedRadioSpeed == 'normal')
  {
    speed = 1;
  }
}
function drawEquilibrium()
{
  cbottom.strokeStyle = "black";
  cbottom.setLineDash([]);
  cbottom.beginPath();
  cbottom.moveTo(0,canvasb.height/2);
  cbottom.lineTo(1000,canvasb.height/2);
  cbottom.stroke();
}
function drawGraph()
{
  cbottom.strokeStyle = "lightgray";
  cbottom.setLineDash([6, 2]);
  cbottom.beginPath();
  cbottom.moveTo(0,canvasb.height/2 );
  cbottom.lineTo(canvasb.width,canvasb.height/2 );
  cbottom.stroke();
  cbottom.moveTo(0,canvasb.height/2 - 40);
  cbottom.lineTo(canvasb.width,canvasb.height/2 - 40);
  cbottom.stroke();
  cbottom.moveTo(0,canvasb.height/2 - 80);
  cbottom.lineTo(canvasb.width,canvasb.height/2 - 80);
  cbottom.stroke();
  cbottom.moveTo(0,canvasb.height/2 - 120);
  cbottom.lineTo(canvasb.width,canvasb.height/2 - 120);
  cbottom.stroke();
  cbottom.moveTo(0,canvasb.height/2 - 160);
  cbottom.lineTo(canvasb.width,canvasb.height/2 - 160);
  cbottom.stroke();
  cbottom.moveTo(0,canvasb.height/2 + 40);
  cbottom.lineTo(canvasb.width,canvasb.height/2 + 40);
  cbottom.stroke();
  cbottom.moveTo(0,canvasb.height/2 + 80);
  cbottom.lineTo(canvasb.width,canvasb.height/2 + 80);
  cbottom.stroke();
  cbottom.moveTo(0,canvasb.height/2 + 120);
  cbottom.lineTo(canvasb.width,canvasb.height/2 + 120);
  cbottom.stroke();
  cbottom.moveTo(0,canvasb.height/2 + 160);
  cbottom.lineTo(canvasb.width,canvasb.height/2 + 160);
  cbottom.stroke();
  cbottom.moveTo(60,canvasb.height);
  cbottom.lineTo(60,0);
  cbottom.stroke();
  cbottom.moveTo(120,canvasb.height);
  cbottom.lineTo(120,0);
  cbottom.stroke();
  cbottom.moveTo(180,canvasb.height);
  cbottom.lineTo(180,0);
  cbottom.stroke();
  cbottom.moveTo(240,canvasb.height);
  cbottom.lineTo(240,0);
  cbottom.stroke();
  cbottom.moveTo(300,canvasb.height);
  cbottom.lineTo(300,0);
  cbottom.stroke();
  cbottom.moveTo(360,canvasb.height);
  cbottom.lineTo(360,0);
  cbottom.stroke();
  cbottom.moveTo(420,canvasb.height);
  cbottom.lineTo(420,0);
  cbottom.stroke();
  cbottom.moveTo(480,canvasb.height);
  cbottom.lineTo(480,0);
  cbottom.stroke();
  cbottom.moveTo(540,canvasb.height);
  cbottom.lineTo(540,0);
  cbottom.stroke();
  cbottom.moveTo(600,canvasb.height);
  cbottom.lineTo(600,0);
  cbottom.stroke();
  cbottom.moveTo(660,canvasb.height);
  cbottom.lineTo(660,0);
  cbottom.stroke();
  cbottom.moveTo(720,canvasb.height);
  cbottom.lineTo(720,0);
  cbottom.stroke();
  cbottom.moveTo(780,canvasb.height);
  cbottom.lineTo(780,0);
  cbottom.stroke();
  cbottom.moveTo(840,canvasb.height);
  cbottom.lineTo(840,0);
  cbottom.stroke();
  cbottom.moveTo(900,canvasb.height);
  cbottom.lineTo(900,0);
  cbottom.stroke();
  cbottom.moveTo(960,canvasb.height);
  cbottom.lineTo(960,0);
  cbottom.stroke();
}
function drawAmplitude()
{
  cbottom.strokeStyle = "red";
  cbottom.setLineDash([]);
  cbottom.beginPath();
  cbottom.moveTo(0,canvasb.height/2 - amplitude);
  cbottom.lineTo(1000,canvasb.height/2 - amplitude);
  cbottom.stroke();
}
var canvasb = document.getElementById("canvas-bottom");
var cbottom = canvasb.getContext("2d");
drawGraph();
drawEquilibrium();
var amplitudeInput = document.getElementById("amplitudeinput");
amplitudeInput.addEventListener('mouseup', function()
{
    amplitude = this.value;
    cbottom.clearRect(0,0,canvasb.width,canvasb.height);
    drawGraph();
    ctx.clearRect(0,0,c.width,c.height);
    draw();
if(document.getElementById("radio-one").checked)
{
  drawAmplitude();
}
if(document.getElementById("radio-three").checked)
{
  drawEquilibrium();
}
});
var frequencyInput = document.getElementById("frequencyinput");
frequencyInput.addEventListener('mouseup', function()
{
    frequency = this.value;
    ctx.clearRect(0,0,c.width,c.height);
    draw();
    document.getElementById("wave-period-info").innerText = (Math.round(1 / frequency * 100) / 100).toFixed(2) + "s";
});
