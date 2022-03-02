//startPozice
let panacek = document.getElementById('panacek');
let panacek2 = document.getElementById('panacek2');

let panacekX = 250;	
let panacekY = 150;
let panacek2X = 150;
let panacek2Y = 150;

let panacekSirka = 64;
let panacekVyska = 70;

let mince = document.getElementById('mince');
let mince2 = document.getElementById('mince2');
let mince3 = document.getElementById('mince3');

let minceSirka = 36;
let minceVyska = 36;

let minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
let minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));

let mince2X = Math.floor(Math.random() * (window.innerWidth - minceSirka));
let mince2Y = Math.floor(Math.random() * (window.innerHeight - minceVyska));

let mince3X = Math.floor(Math.random() * (window.innerWidth - minceSirka));
let mince3Y = Math.floor(Math.random() * (window.innerHeight - minceVyska));

let score = document.getElementById('score');
let score2 = document.getElementById('score2');

function startZvuk(ElementSelector) {
	document.querySelector(ElementSelector).play();
}

function stopZvuk(ElementSelector) {
	document.querySelector(ElementSelector).pause();
}

function priNacteni() {
	panacek.style.left = panacekX + 'px';
	panacek.style.top = panacekY + 'px';
	panacek2.style.left = panacek2X + 'px';
	panacek2.style.top = panacek2Y + 'px';
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';
	mince2.style.left = mince2X + 'px';
	mince2.style.top = mince2Y + 'px';
	mince3.style.left = mince3X + 'px';
	mince3.style.top = mince3Y + 'px';
	score.textContent = 0;
	score2.textContent = 0;
}

function prekryti() {
	if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || 
	minceY + minceVyska < panacekY)) {
		//zvuk mince
		startZvuk('#zvukmince');
		//mince na novou polohu
		minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
		minceY = Math.floor(Math.random() * (window.innerHeight - minceSirka));
		mince.style.left = minceX + 'px';
		mince.style.top = minceY + 'px';
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
		minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
		minceY = Math.floor(Math.random() * (window.innerHeight - minceSirka));
		mince.style.left = minceX + 'px';
		mince.style.top = minceY + 'px';
		//pricist bod
		score2.textContent = parseFloat(score.textContent) + 1;
		vitez();
	}

}

function pohybPanacka(event) {
	let klavesa = event.keyCode;
	startZvuk('#hudba');
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
		alert('Jsi vítěz! chceš hrát znovu?');
		priNacteni();
	}
}