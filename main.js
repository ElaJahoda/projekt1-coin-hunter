let panacekSirka = 64;
let panacekVyska = 70;

let panacek = document.getElementById('panacek');
let panacekX = window.innerWidth / 2 + (panacekSirka / 2);	
let panacekY = window.innerHeight / 2 - (panacekVyska / 2);

let panacek2 = document.getElementById('panacek2');
let panacek2X = window.innerWidth / 2 - (panacekSirka / 2);
let panacek2Y = window.innerHeight / 2 - (panacekVyska / 2);

let minceSirka = 36;
let minceVyska = 36;

let mince = document.getElementById('mince');
let minceX = generMinceX();
let minceY = generMinceY();

let mince2 = document.getElementById('mince2');
let mince2X = generMinceX();
let mince2Y = generMinceY();

let mince3 = document.getElementById('mince3');
let mince3X = generMinceX();
let mince3Y = generMinceY();

let score = document.getElementById('score');
let score2 = document.getElementById('score2');

function generMinceX() {
	let x = Math.floor(Math.random() * (window.innerWidth - minceSirka));
	return x;
}
function generMinceY() {
	let y = Math.floor(Math.random() * (window.innerHeight - minceVyska));
	return y;
}

function umisteniMince(minceDruh, x, y) {
	(minceDruh).style.left = x + 'px';
	(minceDruh).style.top = y + 'px';
}

function umisteniPanacka(panacekDruh, x, y) {
	(panacekDruh).style.left = x + 'px';
	(panacekDruh).style.top = y + 'px';
}

function startZvuk(ElementSelector) {
	document.querySelector(ElementSelector).play();
}

function stopZvuk(ElementSelector) {
	document.querySelector(ElementSelector).pause();
}

function priNacteni() {
	umisteniPanacka(panacek, panacekX, panacekY);
	umisteniPanacka(panacek2, panacek2X, panacek2Y);
	umisteniMince(mince, minceX, minceY);
	umisteniMince(mince2, mince2X, mince2Y);
	umisteniMince(mince3, mince3X, mince3Y);
	score.textContent = 0;
	score2.textContent = 0;
}

function prekryti() {
	if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || 
	minceY + minceVyska < panacekY)) {
		startZvuk('#zvukmince');
		minceX = generMinceX();
		minceY = generMinceY();
		umisteniMince(mince, minceX, minceY);
		// minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
		// minceY = Math.floor(Math.random() * (window.innerHeight - minceSirka));
		// mince.style.left = minceX + 'px';
		// mince.style.top = minceY + 'px';
		score.textContent = parseFloat(score.textContent) + 3;
		vitez();
    }
	if (!(panacekX + panacekSirka < mince2X || mince2X + minceSirka < panacekX || panacekY + panacekVyska < mince2Y || 
		mince2Y + minceVyska < panacekY)) {
			startZvuk('#zvukmince');
			mince2X = Math.floor(Math.random() * (window.innerWidth - minceSirka));
			mince2Y = Math.floor(Math.random() * (window.innerHeight - minceSirka));
			mince2.style.left = mince2X + 'px';
			mince2.style.top = mince2Y + 'px';
			score.textContent = parseFloat(score.textContent) + 2;
			vitez();
		}
	if (!(panacekX + panacekSirka < mince3X || mince3X + minceSirka < panacekX || panacekY + panacekVyska < mince3Y || 
		mince3Y + minceVyska < panacekY)) {
			startZvuk('#zvukmince');
			mince3X = Math.floor(Math.random() * (window.innerWidth - minceSirka));
			mince3Y = Math.floor(Math.random() * (window.innerHeight - minceSirka));
			mince3.style.left = mince3X + 'px';
			mince3.style.top = mince3Y + 'px';
			score.textContent = parseFloat(score.textContent) + 1;
			vitez();
		}
}

function prekryti2() {
	if (!(panacek2X + panacekSirka < minceX || minceX + minceSirka < panacek2X || panacek2Y + panacekVyska < minceY || 
	minceY + minceVyska < panacek2Y)) {
		startZvuk('#zvukmince');
		minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
		minceY = Math.floor(Math.random() * (window.innerHeight - minceSirka));
		mince.style.left = minceX + 'px';
		mince.style.top = minceY + 'px';
		score2.textContent = parseFloat(score2.textContent) + 3;
		vitez();
	}
	if (!(panacek2X + panacekSirka < mince2X || mince2X + minceSirka < panacek2X || panacek2Y + panacekVyska < mince2Y || 
		mince2Y + minceVyska < panacek2Y)) {
			startZvuk('#zvukmince');
			mince2X = Math.floor(Math.random() * (window.innerWidth - minceSirka));
			mince2Y = Math.floor(Math.random() * (window.innerHeight - minceSirka));
			mince2.style.left = mince2X + 'px';
			mince2.style.top = mince2Y + 'px';
			score2.textContent = parseFloat(score2.textContent) + 2;
			vitez();
		}
	if (!(panacek2X + panacekSirka < mince3X || mince3X + minceSirka < panacek2X || panacek2Y + panacekVyska < mince3Y || 
		mince3Y + minceVyska < panacek2Y)) {
			startZvuk('#zvukmince');
			mince3X = Math.floor(Math.random() * (window.innerWidth - minceSirka));
			mince3Y = Math.floor(Math.random() * (window.innerHeight - minceSirka));
			mince3.style.left = mince3X + 'px';
			mince3.style.top = mince3Y + 'px';
			score2.textContent = parseFloat(score.textContent) + 1;
			vitez();
		}
		console.log(map)
}

let map = {};
onkeydown = onkeyup = function pohybPanacka(e){
    map[e.keyCode] = e.type == 'keydown';
// 	console.log(map)
	if (map[39] == true && (panacekX + 10) <= (window.innerWidth - panacekSirka)) {
		panacekX = panacekX + 10;
		panacek.style.left = panacekX + 'px';
		panacek.src = "obrazky/panacek-vpravo.png";
		prekryti();
        }
	if (map[37] == true && (panacekX - 10) >= 0) {
		panacekX = panacekX - 10;
		panacek.style.left = panacekX  + 'px';
		panacek.src = "obrazky/panacek-vlevo.png";
		prekryti();
	}
	if (map[38] == true && (panacekY - 10) >= 0) {
		panacekY = panacekY - 10;
		panacek.style.top = panacekY  + 'px';
		panacek.src = "obrazky/panacek-nahoru.png";
		prekryti();
	}
	if (map[40] == true && (panacekY + 10) <= (window.innerHeight - panacekVyska)) {
		panacekY = panacekY + 10;
		panacek.style.top = panacekY  + 'px';
		panacek.src = "obrazky/panacek.png";
		prekryti();
	}
	if (map[68] == true && (panacek2X + 10) <= (window.innerWidth - panacekSirka)) {		
			panacek2X = panacek2X + 10;
			panacek2.style.left = panacek2X + 'px';
			panacek2.src = "obrazky/panacek-vpravo - kopie.png";
			prekryti2();
	}
	if (map[65] == true && (panacek2X - 10) >= 0) {
		panacek2X = panacek2X - 10;
		panacek2.style.left = panacek2X  + 'px';
		panacek2.src = "obrazky/panacek-vlevo - kopie.png";
		prekryti2();
	}
	if (map[87] == true && (panacek2Y - 10) >= 0) {
		panacek2Y = panacek2Y - 10;
		panacek2.style.top = panacek2Y  + 'px';
		panacek2.src = "obrazky/panacek-nahoru - kopie.png";
		prekryti2();
	}
	if (map[83] == true && (panacek2Y + 10) <= (window.innerHeight - panacekVyska)) {
		panacek2Y = panacek2Y + 10;
		panacek2.style.top = panacek2Y  + 'px';
		panacek2.src = "obrazky/panacek - kopie.png";
		prekryti2();
	}
}

function vitez() {
	if (score.textContent >= 1) {
		stopZvuk('#hudba');
		startZvuk('#zvukfanfara');
		alert('Růžový hrdino, jsi vítěz! Chcete hrát znovu?');
		hratZnovu();
	}
	if (score2.textContent >= 1) {
		stopZvuk('#hudba');
		startZvuk('#zvukfanfara');
		alert('Tyrkysový hrdino, jsi vítěz! Chcete hrát znovu?');
		hratZnovu();
	}
}

function hratZnovu() {
	panacek.src = "obrazky/panacek.png";
	panacekX = window.innerWidth / 2 + (panacekSirka / 2);	
	panacekY = window.innerHeight / 2 - (panacekVyska / 2);
	umisteniPanacka(panacek, panacekX, panacekY);
	panacek2.src = "obrazky/panacek - kopie.png";
	panacek2X = window.innerWidth / 2 - (panacekSirka / 2);	
	panacek2Y = window.innerHeight / 2 - (panacekVyska / 2);
	umisteniPanacka(panacek2, panacek2X, panacek2Y);
	minceX = generMinceX();
	minceY = generMinceY();
	mince2X = generMinceX();
	mince2Y = generMinceY();
	mince3X = generMinceX();
	mince3Y = generMinceY();
	umisteniMince(mince, minceX, minceY);
	umisteniMince(mince2, mince2X, mince2Y);
	umisteniMince(mince3, mince3X, mince3Y);
	score.textContent = 0;
	score2.textContent = 0;
}