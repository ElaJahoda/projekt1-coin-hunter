//startPozice
let panacek = document.getElementById('panacek');
let panacekX = 150;	
let panacekY = 150;
let panacekSirka = 64;
let panacekVyska = 70;

let mince = document.getElementById('mince');
let minceX = Math.floor(Math.random() * window.innerWidth);
let minceY = Math.floor(Math.random() * window.innerHeight);
let minceSirka = 36;
let minceVyska = 36;

let score = document.getElementById('score');

function startZvuk(ElementSelector) {
	document.querySelector(ElementSelector).play();
}

function stopZvuk(ElementSelector) {
	document.querySelector(ElementSelector).pause();
}

function priNacteni() {
	panacek.style.left = panacekX + 'px';
	panacek.style.top = panacekY + 'px';
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';
	score.textContent = 0;
}

function prekryti() {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || 
	minceY + minceVyska < panacekY)) {
		//zvuk mince
		startZvuk('#zvukmince');
		//mince na novou polohu
		minceX = Math.floor(Math.random() * window.innerWidth);
		minceY = Math.floor(Math.random() * window.innerHeight);
		mince.style.left = minceX + 'px';
		mince.style.top = minceY + 'px';
		//pricist bod
		score.textContent = parseFloat(score.textContent) + 1;
		vitez();
    }
}

function pohybPanacka(event) {
	let klavesa = event.keyCode;
	startZvuk('#hudba');
	if (klavesa === 39 && (panacekX + 10) <= window.innerWidth) {
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
	if (klavesa === 40 && (panacekY + 10) <= window.innerHeight) {
		panacekY = panacekY + 10;
		panacek.style.top = panacekY  + 'px';
		panacek.src = "obrazky/panacek.png";
		prekryti();
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