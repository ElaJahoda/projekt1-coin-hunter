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
		//zvuk mince
		startZvuk('#zvukmince');
		//mince na novou polohu
		umisteniMince(mince, minceX, minceY);
		console.log(minceX, minceY);
		// umisteniMince(mince); 
		//pricist bod
		score.textContent = parseFloat(score.textContent) + 1;
		vitez();
    }
}

function prekryti2() {
	if (!(panacek2X + panacekSirka < minceX || minceX + minceSirka < panacek2X || panacek2Y + panacekVyska < minceY || 
	minceY + minceVyska < panacek2Y)) {
		//zvuk mince
		startZvuk('#zvukmince');
		//mince na novou polohu
		umisteniMince(mince, minceX, minceY);
		console.log(minceX, minceY);
		//pricist bod
		score2.textContent = parseFloat(score2.textContent) + 1;
		vitez();
	}

}

function pohybPanacka(event) {
	let klavesa = event.keyCode;
	startZvuk('#hudba');
	// console.log(panacekX, panacekY);
	// console.log(panacek2X, panacek2Y);
	if (klavesa === 39 && (panacekX + 10) <= (window.innerWidth - panacekSirka)) {
		panacekX = panacekX + 10;
		panacek.style.left = panacekX + 'px';
		panacek.src = "obrazky/panacek-vpravo.png";
		prekryti();
	}
	if (klavesa === 37 && (panacekX - 10) >= 0) {
		panacekX = panacekX - 10;
		panacek.style.left = panacekX  + 'px';
		panacek.src = "obrazky/panacek-vlevo.png";
		prekryti();
	}
	if (klavesa === 38 && (panacekY - 10) >= 0) {
		panacekY = panacekY - 10;
		panacek.style.top = panacekY  + 'px';
		panacek.src = "obrazky/panacek-nahoru.png";
		prekryti();
	}
	if (klavesa === 40 && (panacekY + 10) <= (window.innerHeight - panacekVyska)) {
		panacekY = panacekY + 10;
		panacek.style.top = panacekY  + 'px';
		panacek.src = "obrazky/panacek.png";
		prekryti();
	}
	if (klavesa === 68 && (panacek2X + 10) <= (window.innerWidth - panacekSirka)) {
		panacek2X = panacek2X + 10;
		panacek2.style.left = panacek2X + 'px';
		panacek2.src = "obrazky/panacek-vpravo - kopie.png";
		prekryti2();
	}
	if (klavesa === 65 && (panacek2X - 10) >= 0) {
		panacek2X = panacek2X - 10;
		panacek2.style.left = panacek2X  + 'px';
		panacek2.src = "obrazky/panacek-vlevo - kopie.png";
		prekryti2();
	}
	if (klavesa === 87 && (panacek2Y - 10) >= 0) {
		panacek2Y = panacek2Y - 10;
		panacek2.style.top = panacek2Y  + 'px';
		panacek2.src = "obrazky/panacek-nahoru - kopie.png";
		prekryti2();
	}
	if (klavesa === 83 && (panacek2Y + 10) <= (window.innerHeight - panacekVyska)) {
		panacek2Y = panacek2Y + 10;
		panacek2.style.top = panacek2Y  + 'px';
		panacek2.src = "obrazky/panacek - kopie.png";
		prekryti2();
	}
}

function vitez() {
	if (score.textContent == 5) {
		stopZvuk('#hudba');
		startZvuk('#zvukfanfara');
		alert('Růžový hrdino, jsi vítěz! Chcete hrát znovu?');
		priNacteni();
	}
	if (score2.textContent == 5) {
		stopZvuk('#hudba');
		startZvuk('#zvukfanfara');
		alert('Tyrkysový hrdino, jsi vítěz! Chcete hrát znovu?');
		priNacteni();
	}
}