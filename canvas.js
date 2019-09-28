var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.beginPath();
c.moveTo(0, canvas.height / 2);
for (var i = 0; i < canvas.width; i++) {
  c.lineTo(i, canvas.height/2 + Math.sin(i * 0.01) * 100);
}
c.stroke();
