let my = {};

function init() {
	my.drag = { n: 0, onQ: false, holdX: 0, holdY: 0 };
	my.mode = 'icosahedron';

	my.wd = 450;
	my.ht = 450;

	let s = '';
	// s += '<canvas id="canvasId" style="z-index:1;"></canvas>';
	// s +=
	// 	'<button id="dragBtn" onclick="toggleDrag()" style="z-index:2; position: absolute; top: 3px; left: 3px;" class="btn lo" >Spin</button>';

	// s +=
	// 	'<button id="explodeBtn" onclick="toggleExplode()" style="z-index:2; position: absolute; top: 3px; left: 70px;" class="btn lo" >Explode</button>';
	s += '<div style="position: absolute; display: none; top: 3px; right: 5px; font: 18px Arial;">';
	s += getDropdownHTML(['Black', 'White'], 'clrChg', 'clrType');
	s += '</div>';

	// s = wrap({ cls: 'js', style: 'width:' + my.wd + 'px; height:' + my.ht + 'px;' }, s);
	docInsert(s);

	my.can = new Can('canvasId', my.wd, my.ht, 2);
	this.transMat = [
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1],
		[0, 0, 0]
	];
	this.f = 500;
	this.shapes = [];
	this.clrs = [
		'#ff0000',
		'#0000ff',
		'#ff9900',
		'#00ff00',
		'#ffff00',
		'#660066',
		'#99ff00',
		'#0099ff',
		'#00ff99',
		'#9900ff',
		'#ff0099',
		'#006666',
		'#666600',
		'#990000',
		'#009999',
		'#999900',
		'#003399',
		'#ff00ff',
		'#993333',
		'#330099'
	];
	this.explodeQ = false;
	my.dragModeQ = false;
	my.drag.onQ = false;
	my.drag.holdX = 0;
	my.drag.holdY = 0;
	this.poly = new Poly();
	xAngle = 2;
	yAngle = 4;
	zAngle = 0;
	let el = my.can.el;
	el.addEventListener('touchstart', ontouchstart, false);
	el.addEventListener('touchmove', ontouchmove, false);
	el.addEventListener('mousedown', onmouseDown, false);
	el.addEventListener('mousemove', onmouseMove, false);
	el.addEventListener('mouseup', onmouseUp, false);
	stt();
}

function ontouchstart(ev) {
	my.drag.onQ = true;
	let touch = ev.targetTouches[0];
	let [mouseX, mouseY] = my.can.mousePos(ev);
	my.drag.holdX = mouseX;
	my.drag.holdY = mouseY;
}

function ontouchmove(ev) {
	let touch = ev.targetTouches[0];
	ev.clientX = touch.clientX;
	ev.clientY = touch.clientY;
	ev.touchQ = true;
	onmouseMove(ev);
	ev.preventDefault();
}

function onmouseDown(ev) {
	my.drag.onQ = true;
	let [mouseX, mouseY] = my.can.mousePos(ev);
	my.drag.holdX = mouseX;
	my.drag.holdY = mouseY;
}

function onmouseUp(ev) {
	my.drag.onQ = false;
}

function onmouseMove(ev) {
	let [mouseX, mouseY] = my.can.mousePos(ev);
	if (my.dragModeQ) {
		if (my.drag.onQ) {
			settransMat(-(my.drag.holdY - mouseY) * 3, (my.drag.holdX - mouseX) * 3, 0, transMat);
			my.drag.holdX = mouseX;
			my.drag.holdY = mouseY;
			update();
		}
	} else {
		yAngle = -(mouseX - my.wd / 2) / 25;
		xAngle = (mouseY - my.ht / 2) / 25;
	}
}

function toggleDrag() {
	my.dragModeQ = !my.dragModeQ;
	toggleBtn('dragBtn', my.dragModeQ);
	if (my.dragModeQ) {
		document.getElementById('dragBtn').innerHTML = 'Drag';
	} else {
		document.getElementById('dragBtn').innerHTML = 'Spin';
	}
}

function toggleExplode() {
	this.explodeQ = !this.explodeQ;
	toggleBtn('explodeBtn', this.explodeQ);
	restart();
}

function toggleBtn(btn, onq) {
	if (onq) {
		document.getElementById(btn).classList.add('hi');
		document.getElementById(btn).classList.remove('lo');
	} else {
		document.getElementById(btn).classList.add('lo');
		document.getElementById(btn).classList.remove('hi');
	}
}

function getDropdownHTML(opts, funcName, id) {
	let s = '';
	s +=
		'<select id="' +
		id +
		'" style="font: 18px; padding: 1px;" autocomplete="off" onchange="' +
		funcName +
		'()">';
	for (let i = 0; i < opts.length; i++) {
		let idStr = id + i;
		let chkStr = i == 99 ? 'checked' : '';
		s +=
			'<option id="' +
			idStr +
			'" value="' +
			opts[i] +
			'" style="height:18px;" ' +
			chkStr +
			' >' +
			opts[i] +
			'</option>';
	}
	s += '</select>';
	return s;
}

function clrChg() {
	let el = document.getElementById('clrType');
	if (el.selectedIndex == -1) return null;
	let t = el.options[el.selectedIndex].text;
	setClrs(t);
	update();
}

function getClrType() {
	let div = document.getElementById('clrType');
	if (div.selectedIndex == -1) return 'Multi';
	return div.options[div.selectedIndex].text;
}

function stt() {
	shapes = [];
	poly.shapeType = my.mode;
	setShapesFromPoly();
	settransMat(200, 50, 0, transMat);
	my.can.clear();
	drawShapes();
	this.frameNo = 0;
	animate();
}

function restart() {
	shapes = [];
	poly.shapeType = my.mode;
	setShapesFromPoly();
	update();
}

function animate() {
	this.frameNo++;
	if (my.dragModeQ) {
	} else {
		settransMat(xAngle, yAngle, zAngle, transMat);
		update();
	}
	if (this.frameNo < 1e8) {
		requestAnimationFrame(animate);
	}
}

function update() {
	my.can.clear();
	drawShapes();
}

function drawShapes() {
	let prevDepth = 0;
	let sortNeededQ = false;
	for (let i = 0, len = shapes.length; i < len; i++) {
		let shape = shapes[i];
		shape.drawsurface(false, 'N');
		if (i > 0) {
			if (shape.depth < prevDepth) {
				sortNeededQ = true;
			}
		}
		prevDepth = shape.depth;
	}
	if (sortNeededQ) {
		shapes.sort(compareDepth);
	}
}

function compareDepth(a, b) {
	if (a.depth < b.depth) return -1;
	return 1;
}

function setShapesFromPoly() {
	let C = poly.getSolid();
	let i = 0;
	while (i < C.length) {
		let surf = C[i];
		addShape3D('surface', coords2Lines(surf, poly.scale), 1, '#ffffff', 'rgba(0,0,255,0.3)');
		i++;
	}
	setClrs(getClrType());
}

function coords2Lines(surf, Scale) {
	let P = [];
	let midPt = [0, 0, 0];
	for (let i = 0; i < surf.length; i++) {
		if (i < surf.length - 1) {
			let tonum = i + 1;
		} else {
			tonum = 0;
		}
		P[i] = [];
		if (surf[i] == undefined) {
			console.log('Error surface =' + i, surf[i]);
		} else {
			for (let j = 0; j < 3; j++) {
				P[i][j] = surf[i][j] * Scale;
				if (explodeQ) midPt[j] += P[i][j];
			}
		}
	}
	if (explodeQ) {
		for (let j = 0; j < 3; j++) {
			midPt[j] /= surf.length;
		}
		for (let i = 0; i < surf.length; i++) {
			for (let j = 0; j < 3; j++) {
				P[i][j] += midPt[j] / 2;
			}
		}
	}
	return P;
}

function addShape3D(shapeType, pointarray, lineweight, lineClr, fillClr) {
	let shape = new Shape3D();
	shape.transMat = transMat;
	shape.f = this.f;
	shape.setPts(pointarray);
	shape.shapeType = shapeType;
	shape.lineweight = lineweight;
	shape.lineClr = lineClr;
	shape.fillClr = fillClr;
	shapes.push(shape);
}

function settransMat(x, y, z, M) {
	let vectorLength = Math.sqrt(x * x + y * y + z * z);
	if (vectorLength > 0.0001) {
		x /= vectorLength;
		y /= vectorLength;
		z /= vectorLength;
		let Theta = vectorLength / 500;
		let cosT = Math.cos(Theta);
		let sinT = Math.sin(Theta);
		let tanT = 1 - cosT;
		let T = [[], [], []];
		T[0][0] = tanT * x * x + cosT;
		T[0][1] = tanT * x * y - sinT * z;
		T[0][2] = tanT * x * z + sinT * y;
		T[1][0] = tanT * x * y + sinT * z;
		T[1][1] = tanT * y * y + cosT;
		T[1][2] = tanT * y * z - sinT * x;
		T[2][0] = tanT * x * z - sinT * y;
		T[2][1] = tanT * y * z + sinT * x;
		T[2][2] = tanT * z * z + cosT;
		transMat = matMatMult(T, M);
	}
}

function matMatMult(A, B) {
	let C = [[], [], []];
	C[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] + A[0][2] * B[2][0];
	C[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1] + A[0][2] * B[2][1];
	C[0][2] = A[0][0] * B[0][2] + A[0][1] * B[1][2] + A[0][2] * B[2][2];
	C[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0] + A[1][2] * B[2][0];
	C[1][1] = A[1][0] * B[0][1] + A[1][1] * B[1][1] + A[1][2] * B[2][1];
	C[1][2] = A[1][0] * B[0][2] + A[1][1] * B[1][2] + A[1][2] * B[2][2];
	C[2][0] = A[2][0] * B[0][0] + A[2][1] * B[1][0] + A[2][2] * B[2][0];
	C[2][1] = A[2][0] * B[0][1] + A[2][1] * B[1][1] + A[2][2] * B[2][1];
	C[2][2] = A[2][0] * B[0][2] + A[2][1] * B[1][2] + A[2][2] * B[2][2];
	return C;
}

function setClrs(clrMethod) {
	for (let i = 0; i < shapes.length; i++) {
		let shape = shapes[i];
		shape.clrMethod = clrMethod;
		switch (clrMethod) {
			case 'Black':
				shape.fillClr = convertHexClr('#0d0d0d', 0.2);
				break;
			case 'White':
				shape.fillClr = convertHexClr('#ffffff', 0.1);
				break;
			default:
		}
	}
}

class Poly {
	constructor() {
		this.shapeType = 'cube';
		this.shapeSource = 'calc';
		this.scale = 90;
	}
	getSolid() {
		let C = [];
		switch (this.shapeSource) {
			case 'file':
			case 'data':
				C = [];
				for (let i = 0; i < solidFaces.length; i++) {
					let faceVerts = [];
					for (let j = 0; j < solidFaces[i].length; j++) {
						faceVerts.push(vertices[solidFaces[i][j]]);
					}
					C.push(faceVerts);
				}
				clrMethod = 'Glass';
				break;
			case 'calc':
				C = this.getCalcSolid();
				break;
			default:
		}
		return C;
	}
	getCalcSolid() {
		let C = [];
		this.scale = 90;
		let i;
		let j;
		let a, b, c, d;
		let phi;
		let clrMethod = 'Glass';
		switch (this.shapeType.toLowerCase()) {
			case 'icosahedron':
				phi = (1 + Math.sqrt(5)) / 2;
				a = 1 / 2;
				b = 1 / (2 * phi);
				a *= 3;
				b *= 3;
				C = [
					[
						[0, b, -a],
						[b, a, 0],
						[-b, a, 0]
					],
					[
						[0, b, a],
						[-b, a, 0],
						[b, a, 0]
					],
					[
						[0, b, a],
						[0, -b, a],
						[-a, 0, b]
					],
					[
						[0, b, a],
						[a, 0, b],
						[0, -b, a]
					],
					[
						[0, b, -a],
						[0, -b, -a],
						[a, 0, -b]
					],
					[
						[0, b, -a],
						[-a, 0, -b],
						[0, -b, -a]
					],
					[
						[0, -b, a],
						[b, -a, 0],
						[-b, -a, 0]
					],
					[
						[0, -b, -a],
						[-b, -a, 0],
						[b, -a, 0]
					],
					[
						[-b, a, 0],
						[-a, 0, b],
						[-a, 0, -b]
					],
					[
						[-b, -a, 0],
						[-a, 0, -b],
						[-a, 0, b]
					],
					[
						[b, a, 0],
						[a, 0, -b],
						[a, 0, b]
					],
					[
						[b, -a, 0],
						[a, 0, b],
						[a, 0, -b]
					],
					[
						[0, b, a],
						[-a, 0, b],
						[-b, a, 0]
					],
					[
						[0, b, a],
						[b, a, 0],
						[a, 0, b]
					],
					[
						[0, b, -a],
						[-b, a, 0],
						[-a, 0, -b]
					],
					[
						[0, b, -a],
						[a, 0, -b],
						[b, a, 0]
					],
					[
						[0, -b, -a],
						[-a, 0, -b],
						[-b, -a, 0]
					],
					[
						[0, -b, -a],
						[b, -a, 0],
						[a, 0, -b]
					],
					[
						[0, -b, a],
						[-b, -a, 0],
						[-a, 0, b]
					],
					[
						[0, -b, a],
						[a, 0, b],
						[b, -a, 0]
					]
				];
				this.scale = 80;
				break;
			default:
		}
		return C;
	}
}

function Shape3D() {
	let rotSelfMatrix = [
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1],
		[0, 0, 0]
	];
	let rotSelfQ = false;
	this.velQ = false;
	this.lt = my.wd / 2;
	this.tp = my.ht / 2;
	this.eye = new Pt3d();
	this.eye.setMe(0, 0, 400);
	this.pts = [];
	this.lineweight;
	this.lineClr = 'white';
	this.fillClr = 'rgba(255,0,0,0.9)';
	this.shapeType = 'surf';
	this.clrMethod = 'None';
	this.depth = 0;
	this.showPtsQ = false;
	this.centroid = new Pt3d();
	this.vel3d = new Pt3d();
	this.hideCount = 0;
}

Shape3D.prototype.setPts = function (apts) {
	this.pts = [];
	for (let i = 0; i < apts.length; i++) {
		let p3d = new Pt3d();
		p3d.setMe(apts[i][0], apts[i][1], apts[i][2]);
		this.pts.push(p3d);
	}
	this.calcCentroid();
};

Shape3D.prototype.doShading = function () {
	let alpha = 0.8;
	switch (this.clrMethod) {
		case 'Black':
			alpha = 0;
			break;
		case 'White':
			alpha = 0;
			break;
		default:
	}
	let angle = this.getNormalAngle(this.pts, 0);
	let dark = 1 - angle / Math.PI;
	let red = ((dark * 255) >> 0) + 1;
	let grn = ((dark * 255) >> 0) + 1;
	angle = this.getNormalAngle(this.pts, 1);
	dark = 1 - angle / Math.PI;
	let blu = ((dark * 255) >> 0) + 1;
	this.fillClr = 'rgba(' + red + ',' + grn + ',' + blu + ',' + alpha + ')';
};

Shape3D.prototype.getNormalAngle = function (pts, dimN) {
	if (pts.length < 3) return 0;
	let a = [pts[1].x - pts[0].x, pts[1].y - pts[0].y, pts[1].z - pts[0].z];
	let b = [pts[2].x - pts[1].x, pts[2].y - pts[1].y, pts[2].z - pts[1].z];
	let cross = [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
	let mag = Math.sqrt(cross[0] * cross[0] + cross[1] * cross[1] + cross[2] * cross[2]);
	let theta = Math.acos(cross[dimN] / mag);
	return theta;
};

Shape3D.prototype.calcCentroid = function () {
	centroid = new Pt3d();
	for (let i = 0; i < this.pts.length; i++) {
		centroid.addPtMe(this.pts[i]);
	}
	if (this.pts.length > 0) {
		centroid.x /= this.pts.length;
		centroid.y /= this.pts.length;
		centroid.z /= this.pts.length;
	}
};

Shape3D.prototype.drawsurface = function (aboutEyeQ, viewType) {
	let g = my.can.g;
	g.lineJoin = 'round';
	let xsum = 0;
	let ysum = 0;
	let zsum = 0;
	let clips = [];
	let zMin = Number.MAX_VALUE;
	let zMax = -Number.MAX_VALUE;
	let i = 0;
	let ptRot;
	while (i < this.pts.length) {
		let pt3d = this.pts[i];
		if (this.aboutEyeQ) {
		} else {
			ptRot = this.matPtMult(transMat, pt3d);
			clips.push(ptRot);
		}
		zMin = Math.min(zMin, ptRot.z);
		zMax = Math.max(zMax, ptRot.z);
		xsum += ptRot.x;
		ysum += ptRot.y;
		zsum += ptRot.z;
		i++;
	}
	let pt2s = [];
	i = 0;
	while (i < clips.length) {
		let p3d = clips[i];
		let pt = new Pt();
		pt.x = this.lt + (this.eye.z * p3d.x) / (this.eye.z + p3d.z);
		pt.y = this.tp + (this.eye.z * p3d.y) / (this.eye.z + p3d.z);
		pt2s.push(pt);
		i++;
	}
	let fillQ = true;
	let strokeQ = true;
	switch (this.clrMethod) {
		case 'Black':
			g.lineWidth = 2;
			g.strokeStyle = 'rgba(255,255,255,0.3)';
			g.fillStyle = this.fillClr;
			break;
		case 'White':
			g.lineWidth = 2;
			g.strokeStyle = 'rgba(255,255,255,0.3)';
			g.fillStyle = this.fillClr;
			break;
		default:
			g.lineWidth = 1;
			g.strokeStyle = this.lineClr;
			g.fillStyle = this.fillClr;
	}
	if (pt2s.length > 2) {
		g.beginPath();
		for (i = 0, len = pt2s.length; i < len; i++) {
			pt = pt2s[i];
			if (i == 0) {
				g.moveTo(pt.x, pt.y);
			} else {
				g.lineTo(pt.x, pt.y);
			}
		}
		g.closePath();
		if (strokeQ) g.stroke();
		if (fillQ) g.fill();
	}
	if (my.pointsQ) {
		for (i = 0, len = pt2s.length; i < len; i++) {
			pt = pt2s[i];
			g.beginPath();
			g.fillStyle = 'rgba(0,0,255,0.3)';
			g.arc(pt.x, pt.y, 4, 0, 2 * Math.PI);
			g.closePath();
			g.stroke();
			g.fill();
		}
	}
	let iRecip = 1 / (pt2s.length + 1);
	xsum *= iRecip;
	ysum *= iRecip;
	zsum = f - zsum * iRecip;
	this.depth = (xsum * xsum + ysum * ysum + zsum * zsum) / 10000;
};

Shape3D.prototype.matPtMult = function (A, B) {
	let C = new Pt3d();
	C.x = A[0][0] * B.x + A[0][1] * B.y + A[0][2] * B.z;
	C.y = A[1][0] * B.x + A[1][1] * B.y + A[1][2] * B.z;
	C.z = A[2][0] * B.x + A[2][1] * B.y + A[2][2] * B.z;
	return C;
};

function Pt() {
	this.x = 0;
	this.y = 0;
}

function Pt3d() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
}

Pt3d.prototype.setMe = function (x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
};

Pt3d.prototype.addPtMe = function (pt3d, factor) {
	factor = typeof factor !== 'undefined' ? factor : 1;
	if (factor == 1) {
		this.x += pt3d.x;
		this.y += pt3d.y;
		this.z += pt3d.z;
	} else {
		this.x += pt3d.x * factor;
		this.y += pt3d.y * factor;
		this.z += pt3d.z * factor;
	}
};

function convertHexClr(hex, opacity) {
	hex = hex.replace('#', '');
	let r = parseInt(hex.substring(0, 2), 16);
	let g = parseInt(hex.substring(2, 4), 16);
	let b = parseInt(hex.substring(4, 6), 16);
	return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
}

function rgb2hex(color) {
	let hex = [];
	for (let i = 0; i < 3; i++) {
		hex.push(color[i].toString(16));
		if (hex[i].length < 2) {
			hex[i] = '0' + hex[i];
		}
	}
	return '#' + hex[0] + hex[1] + hex[2];
}

function docInsert(s) {
	let div = document.createElement('div');
	div.innerHTML = s;
	let script = document.currentScript;
	script.parentElement.insertBefore(div, script);
}

function getJSQueryVar(varName, defaultVal) {
	let scripts = document.getElementsByTagName('script');
	let lastScript = scripts[scripts.length - 1];
	let scriptName = lastScript.src;
	let bits = scriptName.split('?');
	if (bits.length < 2) return defaultVal;
	let query = bits[1];
	console.log('query: ', query);
	let vars = query.split('&');
	for (let i = 0; i < vars.length; i++) {
		let pair = vars[i].split('=');
		if (pair[0] == varName) {
			return pair[1];
		}
	}
	return defaultVal;
}

class Can {
	constructor(id, wd, ht, ratio) {
		this.id = id;
		this.ratio = ratio;
		this.el = document.getElementById(id);
		this.g = this.el.getContext('2d');
		this.resize(wd, ht);
		return this;
	}
	resize(wd, ht) {
		this.wd = wd;
		this.ht = ht;
		this.el.width = wd * this.ratio;
		this.el.style.width = wd + 'px';
		this.el.height = ht * this.ratio;
		this.el.style.height = ht + 'px';
		this.g.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
	}
	clear() {
		this.g.clearRect(0, 0, this.wd, this.ht);
	}
	mousePos(ev) {
		let bRect = this.el.getBoundingClientRect();
		let mouseX = (ev.clientX - bRect.left) * (this.el.width / this.ratio / bRect.width);
		let mouseY = (ev.clientY - bRect.top) * (this.el.height / this.ratio / bRect.height);
		return [mouseX, mouseY];
	}
}

function wrap(
	{
		id = '',
		cls = '',
		pos = 'rel',
		style = '',
		txt = '',
		tag = 'div',
		lbl = '',
		fn = '',
		opts = []
	},
	...mores
) {
	let s = '';
	s += '\n';
	txt += mores.join('');
	s +=
		{
			btn: () => {
				if (cls.length == 0) cls = 'btn';
				return '<button onclick="' + fn + '"';
			},
			can: () => '<canvas',
			div: () => {
				let s = '<div';
				s += fn.length > 0 ? ' onclick="' + fn + '" ' : '';
				style += fn.length > 0 ? ' cursor:pointer;' : '';
				return s;
			},
			edit: () => {
				let s = '';
				s += lbl.length > 0 ? '<label class="label">' + lbl + ' ' : '';
				s += '<textarea onkeyup="' + fn + '" onchange="' + fn + '"';
				return s;
			},
			inp: () => {
				if (cls.length == 0) cls = 'input';
				let s = '';
				s += lbl.length > 0 ? '<label class="label">' + lbl + ' ' : '';
				s += '<input value="' + txt + '"';
				s += fn.length > 0 ? '  oninput="' + fn + '" onchange="' + fn + '"' : '';
				return s;
			},
			out: () => {
				pos = 'dib';
				if (cls.length == 0) cls = 'output';
				let s = '';
				s += lbl.length > 0 ? '<label class="label">' + lbl + ' ' : '';
				s += '<span ';
				return s;
			},
			radio: () => {
				if (cls.length == 0) cls = 'radio';
				return '<div ';
			},
			sel: () => {
				if (cls.length == 0) cls = 'select';
				let s = '';
				s += lbl.length > 0 ? '<label class="label">' + lbl + ' ' : '';
				s += '<select ';
				s += fn.length > 0 ? '  onchange="' + fn + '"' : '';
				return s;
			},
			sld: () => {
				s += lbl.length > 0 ? '<label class="label">' + lbl + ' ' : '';
				s += '<input type="range" ' + txt + ' oninput="' + fn + '" onchange="' + fn + '"';
				return s;
			}
		}[tag]() || '';
	if (id.length > 0) s += ' id="' + id + '"';
	if (cls.length > 0) s += ' class="' + cls + '"';
	if (pos == 'dib') s += ' style="position:relative; display:inline-block;' + style + '"';
	if (pos == 'rel') s += ' style="position:relative; ' + style + '"';
	if (pos == 'abs') s += ' style="position:absolute; ' + style + '"';
	s +=
		{
			btn: () => '>' + txt + '</button>',
			can: () => '></canvas>',
			div: () => ' >' + txt + '</div>',
			edit: () => ' >' + txt + '</textarea>',
			inp: () => '>' + (lbl.length > 0 ? '</label>' : ''),
			out: () => ' >' + txt + '</span>' + (lbl.length > 0 ? '</label>' : ''),
			radio: () => {
				let s = '';
				s += '>\n';
				for (let i = 0; i < opts.length; i++) {
					let chk = '';
					if (i == 0) chk = 'checked';
					let idi = id + i;
					let lbl = opts[i];
					s +=
						'<input id="' +
						idi +
						'" type="radio" name="' +
						id +
						'" value="' +
						lbl.name +
						'" onclick="' +
						fn +
						'(' +
						i +
						');" ' +
						chk +
						' >';
					s += '<label for="' + idi + '">' + lbl.name + ' </label>';
				}
				s += '</div>';
				return s;
			},
			sel: () => {
				let s = '';
				s += '>\n';
				for (let i = 0; i < opts.length; i++) {
					let opt = opts[i];
					let idStr = id + i;
					let chkStr = opt.descr == txt ? ' selected ' : '';
					s +=
						'<option id="' +
						idStr +
						'" value="' +
						opt.name +
						'"' +
						chkStr +
						'>' +
						opt.descr +
						'</option>\n';
				}
				s += '</select>';
				if (lbl.length > 0) s += '</label>';
				return s;
			},
			sld: () => {
				let s = '>';
				if (lbl.length > 0) s += '</label>';
				if (lbl.length > 0) s += '<span id="' + id + '0">0</span>';
				return s;
			}
		}[tag]() || '';
	s += '\n';
	return s.trim();
}

init();
