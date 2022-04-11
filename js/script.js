var originalImage = null; 
var backupImg = null; 

function upload(){
	var fileinput = document.getElementById("finput");
	originalImage = new SimpleImage(fileinput);
	backupImg = new SimpleImage(fileinput);
	showOriginal();
}
function reset() {
	for (var pix of originalImage.values()) {
		var x = pix.getX();
		var y = pix.getY();
		backupImg.setPixel(x,y,pix);
	}
}
function showOriginal() {
	var canvas = document.getElementById("canvas")
	originalImage.drawTo(canvas)
}
function showFilter() {
	var canvas = document.getElementById("canvas")
	backupImg.drawTo(canvas)
}
function makeChange() {
	for (var pix of backupImg.values()) {
	var x = pix.getX();
	var y = pix.getY();
	originalImage.setPixel(x,y,pix);
	}
}
function download(){
  var link = document.createElement('a');
  link.download = 'filterpaper.png';
  link.href = document.getElementById('canvas').toDataURL()
  link.click();
}

function diagonalRight (image,pixel) {
	if (pixel.getX()/pixel.getY() < image.getWidth()/image.getHeight()) {
		return true;
	}
	else {
		return false;
	}
}
function diagonalLeft(image,pixel) {
	if (diagonalRight(image,pixel)) {
		return false;
	}
	else {
		return true;
	}
}
function applyColor (color,pixel) {
	if (color=='r'){addColor(pixel,30,0,0);}
	if (color=='g'){addColor(pixel,0,30,0);}
	if (color=='b'){addColor(pixel,0,0,30);}
}
