function addColor (pixel,r=0,g=0,b=0) {
	pixel.setRed(pixel.getRed()+r);
	pixel.setGreen(pixel.getGreen()+g);
	pixel.setBlue(pixel.getBlue()+b);
}

function makeGray() {
	reset();
	for (var pixel of backupImg.values()) {
		var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	showFilter();
}
function makeRed() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30);
	}
	showFilter();
}
function makeGreen() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,0,30);
	}
	showFilter();
}
function makeBlue() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,0,0,30);
	}
	showFilter();
}
function makeAqua() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,0,30,30);
	}
	showFilter();
}
function makeYellow() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30,30,0);
	}
	showFilter();
}
function makeMagenta() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30,0,30);
	}
	showFilter();
}
function makeDull() {
		reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,-30,-30,-30);
	}
	showFilter();
}
function makeBright() {
		reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30,30,30);
	}
	showFilter();
}
function makediag (color1,color2) {
	reset();
	for (var pixel of backupImg.values()) {
		if (diagonalLeft(backupImg,pixel)) {
			applyColor(color1,pixel);
		}
		else {
			applyColor(color2,pixel);
		}
	}
	showFilter();
}

